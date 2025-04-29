function generateDocumentOLD(templateId, documentName) {
  // Get default parent folder
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  var folders = DriveApp.getFileById(ss.getId()).getParents()
  var destinationFolder
  if (folders.hasNext()) {
    destinationFolder = folders.next()
  }

  // Import named ranges
  const namedRanges = ss.getNamedRanges()
  const replacementValues = {}
  namedRanges.forEach((element) => {
    const key = element.getName()
    const value = element.getRange().getValue()
    replacementValues[key] = value
  })

  // Format numbers
  for (key in replacementValues) {
    replacementValues[key] =
      typeof replacementValues[key] == "number"
        ? replacementValues[key].toLocaleString("es-ES", {
            maximumFractionDigits: 2,
          })
        : replacementValues[key]
  }

  // Add current date
  const nowDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  replacementValues["fecha"] = nowDate
  replacementValues["Fecha"] = nowDate

  const copy = createDocumentFromTemplate(
    destinationFolder,
    `[doc] ${documentName} - ${replacementValues.nombre}`,
    templateId,
    "doc",
    true,
    true,
    "{",
    "}",
    replacementValues
  )

  // Get charts
  const doc = DocumentApp.openById(copy.getId())
  const charts = ss.getSheetByName("Un Equipo").getCharts()
  const chartReplacementValues = ["<graficaTemperatura>"]

  const IMAGEWIDTH = 600

  for (var i = 0; i < chartReplacementValues.length; i++) {
    // Get image through Slide (workaround to preserve chart properties)
    const slides = SlidesApp.create("temp")
    const imageBlob = slides
      .getSlides()[0]
      .insertSheetsChartAsImage(charts[i])
      .getAs("image/png")
    DriveApp.getFileById(slides.getId()).setTrashed(true)
    setImage(doc, chartReplacementValues[i], imageBlob, IMAGEWIDTH)
  }

  doc.saveAndClose()
}

function setImage(doc, replacementValue, imageBlob, imageWidth) {
  var searchResult = doc.getBody().findText(replacementValue)
  if (searchResult) {
    var imageContainer = searchResult.getElement().getParent().asParagraph()
    imageContainer.clear()
    const image = imageContainer.appendInlineImage(imageBlob)

    const width = image.getWidth()
    const height = image.getHeight()
    image.setWidth(imageWidth).setHeight((height * imageWidth) / width)

    return image
  }
}

function createDocumentFromTemplateOLDDD(
  destinationFolder,
  filename,
  templateId,
  docType = "doc",
  exportToPDF = true,
  copyComments = false,
  leftDelimiter = "{",
  rightDelimiter = "}",
  replacementValues
) {
  // Escape special characters *+?()| in keys for text replacement
  for (oldKey in replacementValues) {
    const newKey = oldKey
      .toString()
      .replace("(", "\\(")
      .replace(")", "\\)")
      .replace("*", "\\*")
      .replace("+", "\\+")
      .replace("?", "\\?")
      .replace("|", "\\|")

    if (oldKey !== newKey) {
      Object.defineProperty(
        replacementValues,
        newKey,
        Object.getOwnPropertyDescriptor(replacementValues, oldKey)
      )
      delete replacementValues[oldKey]
    }
  }

  // Remove all matching files on destination folder to avoid duplicates
  Tools.deleteFile(filename, destinationFolder)
  const templateFile = DriveApp.getFileById(templateId)
  const copy = templateFile.makeCopy(filename, destinationFolder)

  // Create doc or excel from template
  if (docType == "doc") {
    const doc = DocumentApp.openById(copy.getId())
    const body = doc.getBody()

    // Replace variables in template
    for (key in replacementValues) {
      body.replaceText(
        `${leftDelimiter}${key}${rightDelimiter}`,
        replacementValues[key]
      )
    }

    // Copy comments and replies
    if (copyComments) {
      var newDocId = copy.getId()
      var commentList = Drive.Comments.list(templateId, { maxResults: 100 })
      commentList.items.forEach((item) => {
        var replies = item.replies
        delete item.replies
        var commentId = Drive.Comments.insert(item, newDocId).commentId
        replies.forEach((reply) =>
          Drive.Replies.insert(reply, newDocId, commentId)
        )
      })
    }

    doc.saveAndClose()

    if (exportToPDF) {
      // Remove all matching pdf files on destination folder to avoid duplicates
      const pdfFilename = filename + ".pdf"
      Tools.deleteFile(pdfFilename, destinationFolder)

      // Create PDF version
      var pdfVersion = DriveApp.createFile(doc.getAs("application/pdf"))
      pdfVersion.moveTo(destinationFolder)
      pdfVersion.setName(pdfFilename)
    }
  } else if (docType == "excel") {
    const excel = SpreadsheetApp.openById(copy.getId())
    // Replace variables in template

    for (key in replacementValues) {
      var textFinder = excel.createTextFinder(
        `${leftDelimiter}${key}${rightDelimiter}`
      )
      textFinder.replaceAllWith(replacementValues[key])
    }

    SpreadsheetApp.flush()
  }

  return copy
}

function replaceImage(doc, replacementValue, imageBlob, imageWidth) {
  const searchResult = doc.getBody().findText(replacementValue)
  if (searchResult) {
    // Set image
    var imageContainer = searchResult.getElement().getParent().asParagraph()
    imageContainer.clear()
    const insertedImage = imageContainer.appendInlineImage(imageBlob)
    const width = insertedImage.getWidth()
    const height = insertedImage.getHeight()
    insertedImage.setWidth(imageWidth).setHeight((height * imageWidth) / width)
    return insertedImage
  }
}

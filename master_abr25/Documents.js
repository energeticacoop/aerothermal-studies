function createDocuments(templates, outputRangeName) {

  // Clear output range
  const outputRange = getRangeByName(outputRangeName)
  clearRange(outputRangeName)

  // Replace values in all templates
  templates.forEach((template, templateIndex) => {

    // Create document and replace values
    const copy = createDocumentFromTemplate(template)

    // Output link to document
    setURL(
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Documentación").getRange(outputRange.getRow() + templateIndex, outputRange.getColumn()),
      copy.getUrl(),
      template.templateName
    )
    SpreadsheetApp.flush()
  })
}



function createDocumentFromTemplate(template) {

  // Get template values
  const destinationFolder = getDestinationFolder(template.folder)
  const filename = `${getValue("nombre")} ${getValue("apellidos")} - ${template.templateName}`
  const templateId = template.templateId
  const exportToPDF = template.exportToPDF
  const copyComments = template.copyComments

  // Remove all matching files on destination folder to avoid duplicates
  Tools.deleteFile(filename, destinationFolder)
  const templateFile = DriveApp.getFileById(templateId)
  const mimeType = templateFile.getMimeType()
  const copy = templateFile.makeCopy(filename, destinationFolder)

  // Form search pattern
  const leftDelimiter = "{"
  const rightDelimiter = "}"
  const searchPattern = `${leftDelimiter}.*?${rightDelimiter}`

  // Copy comments and replies
  function copyCommentsAndReplies(copy, templateId) {
    var newDocId = copy.getId()
    var commentList = Drive.Comments.list(templateId, { 'maxResults': 100 })
    commentList.items.forEach(item => {
      //if (!item.status == "resolved") {
      var replies = item.replies
      delete item.replies
      var commentId = Drive.Comments.insert(item, newDocId).commentId
      replies.forEach(reply => Drive.Replies.insert(reply, newDocId, commentId))
      //}
    })
  }

  // Create doc or excel from template 

  // Documents
  if (mimeType == "application/vnd.google-apps.document") {

    const doc = DocumentApp.openById(copy.getId())

    // Replace signature images
    const signatureText = "{firmaIngeniera}"
    if (doc.getBody().findText(signatureText) != null) {
      const signature = DriveApp.getFileById(getValue("firmaIngeniera")).getBlob()
      replaceImage(doc, signatureText, signature, 300)
    }

    // Replace values in body, headers and footers
    const parent = doc.getBody().getParent()

    for (var i = 0; i < parent.getNumChildren(); i++) {
      try {
        // Get all values to be replaced in current child
        const child = parent.getChild(i)

        var range = child.findText(searchPattern)
        const valuesToBeReplaced = []
        while (range) {
          const matches = [...range.getElement().asText().getText().matchAll(searchPattern)].map(e => e[0])
          matches.forEach(match => {
            if (!valuesToBeReplaced.includes(match)) valuesToBeReplaced.push(match)
          })
          range = child.findText(searchPattern, range)
        }

        // Replace values
        valuesToBeReplaced.forEach(valueToBeReplaced => {
          const namedRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(valueToBeReplaced.split(leftDelimiter).pop().split(rightDelimiter)[0])
          if (namedRange != null) {
            const namedRangeValue = namedRange.getDisplayValue()
            child.replaceText(valueToBeReplaced, namedRangeValue)
          }
        })

      }
      catch (err) { }
    }

    // Copy comments and replies
    if (copyComments) copyCommentsAndReplies(copy, templateId)

    // Manage additional actions for templates with special tables
    if (templateId == "1p1RCsYWr8oNgr0-DnO_ky3kBp2gx30n2XLW1SzKCUeY" || templateId == "1-w_4EUponNr7bUgH1Uu_vb7yZrzr4eqDiFfHFgewggU" || templateId == "1EGQtUqyQOeT_bw1r89AYe2C3SyEis0mLyPPKiQZiKso" || templateId == "1cvyP1Esg56g_UUQK10RGilOjGYVNO8wGRWKRhWxj1r4" || templateId == "1gHNhuA3e2Te1_IKMwyo0LwAqoiz4cDfokKshoyTPOSI" || templateId == "1XYiZCwf2By3XAQSQvdHH7LsK_6DTAXDvFDljurjGJxU") createStudyAdditionalContents(doc)



    doc.saveAndClose()

    // Create PDF version
    if (exportToPDF) {
      // Remove all matching pdf files on destination folder to avoid duplicates
      const pdfFilename = filename + ".pdf"
      Tools.deleteFile(pdfFilename, destinationFolder)

      var pdfVersion = DriveApp.createFile(doc.getAs('application/pdf'))
      pdfVersion.moveTo(destinationFolder)
      pdfVersion.setName(pdfFilename)
    }
  }

  // Spreadsheets
  else if (mimeType == "application/vnd.google-apps.spreadsheet") {
    const excel = SpreadsheetApp.openById(copy.getId())

    // Get patterns to be replaced
    const textFinder = excel.createTextFinder(searchPattern).useRegularExpression(true)
    const allMatches = textFinder.findAll().map(e => e.getValue())
    const replacementValues = []
    allMatches.forEach(row => {
      replacementValues.push(...[...row.toString().matchAll(searchPattern)].map(e => e[0]))
    })

    // Replace variables in template
    replacementValues.forEach(value => {
      const textFinder = excel.createTextFinder(value)
      const namedRangeName = value.split(leftDelimiter).pop().split(rightDelimiter)[0]
      const namedRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(namedRangeName)
      if (namedRange != null) {
        textFinder.replaceAllWith(getValue(namedRangeName))
      }
    })

    // Copy comments and replies
    copyCommentsAndReplies(copy, templateId)
  }

  return copy

}

function createStudyAdditionalContents(doc) {

  function setImage(doc, replacementValue, imageBlob, imageWidth) {
    var searchResult = doc.getBody().findText(replacementValue)
    if (searchResult) {
      var imageContainer = searchResult.getElement().getParent().asParagraph()
      imageContainer.clear()
      const image = imageContainer.appendInlineImage(imageBlob)

      const width = image.getWidth()
      const height = image.getHeight()
      image.setWidth(imageWidth).setHeight(height * imageWidth / width)

      return image
    }
  }

  // Get charts
  //const doc = DocumentApp.openById(copy.getId())
  const ss = SpreadsheetApp.getActiveSpreadsheet()
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

  return doc

}

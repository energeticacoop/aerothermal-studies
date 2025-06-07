const sumVector = (sum, number) => sum + number

function rotateArray(array, displacement) {
  return [
    ...array.slice(array.length - displacement),
    ...array.slice(0, array.length - displacement),
  ]
}

function getParentFolderId() {
  return DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet().getId())
    .getParents()
    .next()
    .getId()
}

function getParentFolder() {
  return DriveApp.getFolderById(getParentFolderId())
}

function downloadFile(fileURL, fileName, destinationFolder) {
  var response = UrlFetchApp.fetch(fileURL, { muteHttpExceptions: true })
  var rc = response.getResponseCode()
  if (rc == 200) {
    var fileBlob = response.getBlob()
    if (destinationFolder != null) {
      var file = destinationFolder.createFile(fileBlob)
      file.setName(fileName)
    }
  }
  var fileInfo = { rc: rc, file: file }
  return fileInfo
}

function eraseNamedFields() {
  var ui = SpreadsheetApp.getUi()

  var result = ui.alert(
    `Estás a punto de borrar todos los campos de entrada de la pestaña "${SpreadsheetApp.getActiveSheet().getName()}"`,
    "¿Seguro que quieres continuar?",
    ui.ButtonSet.YES_NO
  )

  const unerasableRanges = [
    "SIPS2",
    "SIPS3",
    "CSVtype",
    "CSVfilename",
    "REEconsumption",
    "surpassingValuesFactor",
    "ahorroTotal", "ahorroTotalConImpuestos", "installationSize"
  ]

  if (result == ui.Button.YES) {
    switch (SpreadsheetApp.getActive().getActiveSheet().getSheetName()) {

      case "Repositorio":
        SpreadsheetApp.getUi().alert("Hombre, el repositorio no, por favor 🤦‍♂️")
        break

      case "Presupuesto":
        break

      default:
        SpreadsheetApp.getActive()
          .getActiveSheet()
          .getNamedRanges()
          .forEach((range) => {
            if (!unerasableRanges.includes(range.getName()))
              range.getRange().clearContent()
          })

    }

    SpreadsheetApp.flush()
  }
}


function getDestinationFolder(destinationFolderName) {
  const folder01 = DriveApp.getFolderById(getParentFolderId())
  const clientFolder = folder01.getParents().next()
  const folder02 = clientFolder.getFoldersByName("02 - Tramitación").next()
  const folder03 = clientFolder.getFoldersByName("03 - Ejecución").next()

  switch (destinationFolderName) {
    case "clientFolder":
      return clientFolder
    case "folder01":
      return folder01
    case "folder02":
      return folder02
    case "folder0200":
      return folder02.getFoldersByName("00 - Documentación para firma").next()
    case "folder0201":
      return folder02.getFoldersByName("01 - DROU").next()
    case "folder0202":
      return folder02.getFoldersByName("02 - BOEL").next()
    case "folder0203":
      return folder02.getFoldersByName("03 - Registro autoconsumo").next()
    case "folder0204":
      return folder02.getFoldersByName("04 - Documentación proyecto").next()
    case "folder03":
      return folder03
  }
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

function logNamedRanges() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName("Repositorio")

  if (!sheet) {
    Logger.log("Sheet 'Repositorio' not found.")
    return
  }

  var namedRanges = ss.getNamedRanges()

  if (namedRanges.length === 0) {
    Logger.log("No named ranges found in the spreadsheet.")
    return
  }

  Logger.log("Named Ranges in 'Repositorio':")

  namedRanges.forEach(function (namedRange) {
    var range = namedRange.getRange()
    if (range.getSheet().getName() === "Repositorio") {
      Logger.log(
        "Name: " + namedRange.getName() + ", Range: " + range.getA1Notation()
      )
    }
  })
}

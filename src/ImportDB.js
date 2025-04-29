function importDb() {
  const sheetNames = [
    "Fusibles CA",
    "Puesta a tierra",
    "Cableado",
    "Fusibles CC",
    "Cargador VE",
    "Magnetos",
    "CombiIGA+Sobretensiones",
    "Dif.",
    "Cajas y Cuadros",
    "Canales",
    "Descargador CA",
    "Eq. Genéricos",
    "Repositorio",
    "Listas",
    "Tablas",
    "Normativa",
  ]

  setValue("fechaImportacion", new Date())
  sheetNames.forEach((e) => cloneGoogleSheet(e))
}

function cloneGoogleSheet(sheetName) {
  // source doc
  var sss = SpreadsheetApp.openById(
    "1kyX0AifhGKYSoK1aSDIMtVzBUoE8tUjStZ-HGzwdFZg"
  )

  // source sheet
  var ss = sss.getSheetByName(sheetName)

  // Get full range of data
  var SRange = ss.getDataRange()

  // get the data values in range
  var SData = SRange.getValues()

  // target spreadsheet
  var tss = SpreadsheetApp.getActiveSpreadsheet()

  // target sheet
  var ts = tss.getSheetByName(sheetName)

  // Clear the Google Sheet before copy
  ts.clear({ contentsOnly: true })

  // set the target range to the values of the source data
  ts.getRange(SRange.getA1Notation()).setValues(SData)
}

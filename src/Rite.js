function createRITEmemory() {
  try {
    // Define the FastAPI endpoint URL
    const fastApiUrl = "https://api.energetica.coop/fill-rite-form/"

    // Define the payload data
    const namedRanges = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName("Un equipo")
      .getNamedRanges()
    const replacementValues = namedRanges.reduce((acc, namedRange) => {
      const keyWithBraces = `{${namedRange.getName()}}`
      acc[keyWithBraces] = namedRange.getRange().getDisplayValue()
      return acc
    }, {})
    const payload = { data: replacementValues }

    // Make a POST request to the FastAPI endpoint
    const response = UrlFetchApp.fetch(fastApiUrl, {
      method: "POST",
      payload: JSON.stringify(payload),
      contentType: "application/json",
    })

    // Check if the response status is OK
    if (response.getResponseCode() === 200) {
      // Get the response content as a Blob
      const blob = response.getBlob()

      // Get the destination folder
      const destinationFolder = getDestinationFolder("folder02")

      // Create a file in the same folder with a specific name
      const fileName = `${getValue("nombre")} ${getValue(
        "apellidos"
      )} - Memoria RITE.pdf`
      Tools.deleteFile(fileName, destinationFolder)
      const file = destinationFolder.createFile(blob.setName(fileName))

      // Output link to document
      setURL(getRangeByName("outputRITE"), file.getUrl(), "Memoria RITE")
      SpreadsheetApp.flush()

      // Log the file URL
      Logger.log(`File URL: ${file.getUrl()}`)
    } else {
      Logger.log(`HTTP error! Status: ${response.getResponseCode()}`)
    }
  } catch (error) {
    Logger.log(`Error: ${error}`)
  }
}

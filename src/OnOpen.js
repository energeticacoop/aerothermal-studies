function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu("🔥 Estudios calefacción")
    .addItem(
      "📘 Generar estudio de aerotermia con radiadores",
      "generateRadiatorAE"
    )
    .addItem(
      "📘 Generar estudio de aerotermia con suelo radiante",
      "generateUnderfloorAE"
    )
    .addItem(
      "📘 Generar estudio de aerotermia nueva o sin consumos con radiadores",
      "generateNewRadiatorAE"
    )
    .addItem(
      "📘 Generar estudio de aerotermia nueva o sin consumos con suelo radiante",
      "generateNewUnderfloorAE"
    )
    .addSeparator()
    .addItem("📕 Generar estudio de biomasa con caldera", "generateBoiler")
    .addItem("📕 Generar estudio de biomasa con hidroestufa", "generateWater")
    .addItem("📕 Generar estudio de biomasa con estufa", "generateHeater")
    .addItem("📕 Generar estudio de biomasa con hidroestufa", "generateFire")
    .addSeparator()
    .addItem("📙 Generar Memoria Técnica y BOEL", "createDocumentation")
    .addSeparator()
    .addItem("📙 Generar Modelo RITE", "createRITEmemory")
    .addSeparator()
    .addItem("📙 Generar Contrato", "createContract")
    .addToUi()

  ui.createMenu("🤖 Utilidades")
    .addItem("🖇️ Importar base de datos de materiales", "importDb")
    .addItem("💣 Borrar campos de salida de documentos", "forgetFolders")
    .addToUi()
}

function checkDatabase() {
  if (getValue("fechaImportacion") == "") importDb()
}

function generateRadiatorAE() {
  createDocuments(
    getStudyTemplates(
      "1p1RCsYWr8oNgr0-DnO_ky3kBp2gx30n2XLW1SzKCUeY",
      "Estudio aerotermia con radiadores"
    ),
    "outputStudy"
  )
}

function generateUnderfloorAE() {
  createDocuments(
    getStudyTemplates(
      "1-w_4EUponNr7bUgH1Uu_vb7yZrzr4eqDiFfHFgewggU",
      "Estudio aerotermia con suelo radiante"
    ),
    "outputStudy"
  )
}

function generateNewRadiatorAE() {
  createDocuments(
    getStudyTemplates(
      "1lpB_g7nBTmFW3AdXYW1tqfR1JnBzt7wJskrK50RXLM0",
      "Estudio aerotermia con radiadores"
    ),
    "outputStudy"
  )
}

function generateNewUnderfloorAE() {
  createDocuments(
    getStudyTemplates(
      "1Ll7ZkD-G-OMMB4xScdg2iL3Hknq9vChNZijglCGDMWc",
      "Estudio aerotermia con suelo radiante"
    ),
    "outputStudy"
  )
}

function generateBoiler() {
  createDocuments(
    getStudyTemplates(
      "1EGQtUqyQOeT_bw1r89AYe2C3SyEis0mLyPPKiQZiKso",
      "Estudio biomasa con caldera"
    ),
    "outputStudy"
  )
}

function generateWater() {
  createDocuments(
    getStudyTemplates(
      "1cvyP1Esg56g_UUQK10RGilOjGYVNO8wGRWKRhWxj1r4",
      "Estudio biomasa con hidroestufa"
    ),
    "outputStudy"
  )
}

function generateHeater() {
  createDocuments(
    getStudyTemplates(
      "1gHNhuA3e2Te1_IKMwyo0LwAqoiz4cDfokKshoyTPOSI",
      "Estudio biomasa con estufa"
    ),
    "outputStudy"
  )
}

function generateFire() {
  createDocuments(
    getStudyTemplates(
      "1XYiZCwf2By3XAQSQvdHH7LsK_6DTAXDvFDljurjGJxU",
      "Estudio biomasa con leña"
    ),
    "outputStudy"
  )
}

function createDocumentation() {
  createDocuments(get02FolderTemplates(), "output02Folder")
}

function createContract() {
  createDocuments(getContractTemplate(), "outputContract")
}

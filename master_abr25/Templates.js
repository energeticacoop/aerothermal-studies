function getStudyTemplates(templateId, documentName) {
  const templates = [
    {
      templateName: documentName,
      templateId: templateId,
      exportToPDF: false,
      copyComments: true,
      folder: "folder01"
    }
  ]
  return templates
}

function get02FolderTemplates() {
  const templates = [
    {
      templateName: "Memoria Técnica",
      templateId: "1W0roVjBUBn7DvgN9mSs771MqB3iEOgwLz3Ex6216jHs",
      exportToPDF: false,
      copyComments: true,
      folder: "folder0202"
    },
    {
      templateName: "Certificado reconocimiento instalación",
      templateId: "18JsxDwdDPv-TEg2or8Al-_Uy6II2uGhD27OVhqcBQvU",
      exportToPDF: false,
      copyComments: true,
      folder: "folder0202"
    },
  ]
  return templates
}

function getContractTemplate() {
  const templates = [
    {
      templateName: "Contrato de instalación de calefacción renovable",
      templateId: "1_gnXeLQ8rb4EiMftp4WOhfiOxZfmVOtLhDprhm_Z5EM",
      exportToPDF: false,
      copyComments: true,
      folder: "folder02"
    },
    {
      templateName: "Información sobre deducciones fiscales",
      templateId: "1Wf9NWcfdd0o8e_BEUQgDQQ26Xf72AiNDukGLKJ9rL5Y",
      exportToPDF: true,
      copyComments: false,
      folder: "folder02"
    },
  ]
  return templates
}

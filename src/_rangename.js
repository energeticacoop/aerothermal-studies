/**
 * @fileoverview Listar todos los rangos con nombre en una hoja de cálculo de Google Sheets.
 */

// 07/06/25

// listAllNamedRanges
// --- Listando Rangos con Nombre ---

// Buscando todos los rangos con nombre (globales y de hoja específica).



// Se encontraron 950 rangos con nombre:

// 1. Nombre: "'R'!String1DUmax", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 2. Nombre: "ImMagnetoME", Rango: "AJ3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 3. Nombre: "'ME+MI+R sobredim ajustado'!MfTfAE", Rango: "D3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 4. Nombre: "'R bien'!Iccmax", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 5. Nombre: "'ME+MI+R'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 6. Nombre: "'R'!String1NCablesTubo", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 7. Nombre: "'ME+MI+R'!String2DUmax", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 8. Nombre: "'R'!String2Ib", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 9. Nombre: "'ME'!NCablesTubo", Rango: "X3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 10. Nombre: "'ME'!Modalidad", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 11. Nombre: "'DI'!String2Conductividad", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 12. Nombre: "'R'!String2Isc", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 13. Nombre: "'MI'!monotrif", Rango: "E3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 14. Nombre: "'ME'!MaterialCable", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 15. Nombre: "'ME'!InFusiblegG", Rango: "AS3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 16. Nombre: "'ME'!IntAdmisibleIz", Rango: "AF3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 17. Nombre: "emisiones15", Rango: "G36", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 18. Nombre: "'ME'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 19. Nombre: "'ME+MI+R sobredim ajustado'!SecciónTeóricaDUAE", Rango: "T3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 20. Nombre: "CurvaMagnetoAE", Rango: "AI3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 21. Nombre: "IbSobredimensionamAMI", Rango: "O3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 22. Nombre: "'R'!String1Longitud", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 23. Nombre: "'Repositorio'!REE", Rango: "B5:C8764", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 24. Nombre: "'DI'!String1DUV", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 25. Nombre: "'ME+MI+R'!InSobret", Rango: "AN3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 26. Nombre: "'ME+MI+R'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 27. Nombre: "'ME'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 28. Nombre: "'ME'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 29. Nombre: "'ME+MI+R sobredim ajustado'!String1NPaneles", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 30. Nombre: "costeiva15", Rango: "G43", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 31. Nombre: "coste14", Rango: "F37", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 32. Nombre: "'ME'!String1TensiónVoc", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 33. Nombre: "'MI'!String1SecciónEscogida", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 34. Nombre: "costetotal12", Rango: "D42", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 35. Nombre: "'Repositorio'!energeticaPowerTariff30", Rango: "U16:U21", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 36. Nombre: "output00Folder", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 37. Nombre: "'ME+MI+R sobredim ajustado'!IntAdmisibleIz", Rango: "AE3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 38. Nombre: "'DI'!String2InFusible", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 39. Nombre: "IbAE", Rango: "AC3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 40. Nombre: "porcentaje12", Rango: "D51", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 41. Nombre: "'R bien'!InstalaciónTuboTipoMI", Rango: "W3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 42. Nombre: "'ME+MI+R sobredim ajustado'!String1DUV", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 43. Nombre: "'ME+MI+R sobredim ajustado'!InstalaciónTuboTipo", Rango: "V3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 44. Nombre: "'MI'!String1I2", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 45. Nombre: "'DI'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 46. Nombre: "'DI'!String1Nfusibles", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 47. Nombre: "'ME+MI+R'!NCablesTuboAE", Rango: "V3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 48. Nombre: "'ME'!String1DUmax", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 49. Nombre: "SecciónTeóricaDUAE", Rango: "S3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 50. Nombre: "'Tablas'!Magnetos", Rango: "A98:A107", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 51. Nombre: "'ME+MI+R sobredim ajustado'!DUPrctgAE", Rango: "AC3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 52. Nombre: "NpolosMagnetoDI", Rango: "AR3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 53. Nombre: "'ME'!Iccmax", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 54. Nombre: "IbSobredimensionamAAE", Rango: "M3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 55. Nombre: "depositopellet", Rango: "G27", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 56. Nombre: "AislamientoDI", Rango: "J3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 57. Nombre: "'ME+MI+R sobredim ajustado'!NpolosMagnetoAE", Rango: "AH3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 58. Nombre: "'ME'!IntAdmisibleCable", Rango: "AB3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 59. Nombre: "'MI'!String2Aislamiento", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 60. Nombre: "'MI'!RedTensiónV", Rango: "Q3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 61. Nombre: "'ME'!LongitudLGA", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 62. Nombre: "SeccTeoricaIadmAE", Rango: "N3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 63. Nombre: "'MI'!Iccmin", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 64. Nombre: "EER", Rango: "J24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 65. Nombre: "'R bien'!IbSobredimensionamAMI", Rango: "O3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 66. Nombre: "'ME+MI+R'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 67. Nombre: "'ME+MI+R'!InvRedSeccDI", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 68. Nombre: "'R bien'!IntMI", Rango: "B3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 69. Nombre: "'DI'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 70. Nombre: "'ME+MI+R sobredim ajustado'!String1DUmax", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 71. Nombre: "'R'!InFusiblegG", Rango: "AS3", Hoja: "R", Ámbito: Global (en hoja: R)

// 72. Nombre: "'MI'!String1InFusible", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 73. Nombre: "'ME'!InSobret", Rango: "AP3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 74. Nombre: "potenciapellet", Rango: "E27", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 75. Nombre: "'MI'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 76. Nombre: "SecciónTeóricaDUME", Rango: "U3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 77. Nombre: "DNIIngeniera", Rango: "D21", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 78. Nombre: "'R bien'!MfTfMI", Rango: "E3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 79. Nombre: "'MI'!Red", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 80. Nombre: "UpSobretAE", Rango: "AL3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 81. Nombre: "NCablesTuboR", Rango: "X3", Hoja: "R", Ámbito: Global (en hoja: R)

// 82. Nombre: "'R'!String2FCorrTAmb", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 83. Nombre: "'DI'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 84. Nombre: "outputContract", Rango: "H12:H13", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 85. Nombre: "'Tablas'!Nivel_Tensión", Rango: "P10", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 86. Nombre: "'ME+MI+R'!marcaEstructura", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 87. Nombre: "'ME+MI+R sobredim ajustado'!IntAdmisibleCableAE", Rango: "AA3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 88. Nombre: "'ME+MI+R sobredim ajustado'!String1Isc", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 89. Nombre: "'MI'!String1NPaneles", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 90. Nombre: "'R bien'!String2Conductividad", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 91. Nombre: "'MI'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 92. Nombre: "costeE13", Rango: "E39", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 93. Nombre: "'Tablas'!Trifásico", Rango: "D25:D28", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 94. Nombre: "DUPrctgAE", Rango: "AB3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 95. Nombre: "'R bien'!String1Udescargador", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 96. Nombre: "caldera", Rango: "K2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 97. Nombre: "'R bien'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 98. Nombre: "'R bien'!I2MI", Rango: "AG3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 99. Nombre: "'R'!String1TensiónVoc", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 100. Nombre: "LongitudAE", Rango: "F3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 101. Nombre: "'ME'!String2Conductividad", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 102. Nombre: "'DI'!String1IbSobredimensionamA", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 103. Nombre: "IbME", Rango: "AE3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 104. Nombre: "SecciónEscogidaME", Rango: "V3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 105. Nombre: "costetotal11", Rango: "C42", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 106. Nombre: "IntAdmisibleIzDI", Rango: "AO3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 107. Nombre: "'DI'!String2DUPrctg", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 108. Nombre: "IbMI", Rango: "AE3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 109. Nombre: "'Tablas'!Fusibles", Rango: "B98:B114", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 110. Nombre: "'ME+MI+R sobredim ajustado'!String2Ib", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 111. Nombre: "'R bien'!DUVMI", Rango: "AC3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 112. Nombre: "'ME'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 113. Nombre: "'R bien'!String1I2", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 114. Nombre: "rendimiento14", Rango: "F34", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 115. Nombre: "'ME'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 116. Nombre: "'R bien'!String1TensiónVoc", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 117. Nombre: "'ME'!String1Isc", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 118. Nombre: "TensiónVAE", Rango: "O3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 119. Nombre: "'R'!IntAdmisibleCable", Rango: "AB3", Hoja: "R", Ámbito: Global (en hoja: R)

// 120. Nombre: "'DI'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 121. Nombre: "'ME'!Red", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 122. Nombre: "'R'!String1NDescarga", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 123. Nombre: "'ME+MI+R sobredim ajustado'!String1I2", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 124. Nombre: "provincia", Rango: "I2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 125. Nombre: "'MI'!String1FCorrTAmb", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 126. Nombre: "'R bien'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 127. Nombre: "apellidoIngenieraPrimero", Rango: "D19", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 128. Nombre: "'ME+MI+R'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 129. Nombre: "MétodoInstalaciónME", Rango: "I3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 130. Nombre: "test", Rango: "B103", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 131. Nombre: "'ME+MI+R sobredim ajustado'!SeccDI", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 132. Nombre: "'ME'!String2InFusible", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 133. Nombre: "'ME+MI+R'!String1Ib", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 134. Nombre: "'DI'!String1Imp", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 135. Nombre: "'R bien'!MaterialCable", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 136. Nombre: "'MI'!String1DUV", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 137. Nombre: "Eq_frio_tipo_1", Rango: "AE2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 138. Nombre: "MétodoInstalaciónR", Rango: "I3", Hoja: "R", Ámbito: Global (en hoja: R)

// 139. Nombre: "'DI'!ImMagneto", Rango: "AS3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 140. Nombre: "'R bien'!IntAdmisibleCableMI", Rango: "AB3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 141. Nombre: "'MI'!String2IntAdmisibleCable", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 142. Nombre: "potenciaTotalME", Rango: "C3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 143. Nombre: "'R'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 144. Nombre: "'ME+MI+R sobredim ajustado'!InSobret", Rango: "AO3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 145. Nombre: "'ME+MI+R sobredim ajustado'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 146. Nombre: "'ME+MI+R sobredim ajustado'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 147. Nombre: "SeccTeoricaIadmR", Rango: "P3", Hoja: "R", Ámbito: Global (en hoja: R)

// 148. Nombre: "'R bien'!String2Longitud", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 149. Nombre: "'R'!NpolosMagneto", Rango: "AI3", Hoja: "R", Ámbito: Global (en hoja: R)

// 150. Nombre: "'DI'!String2Isc", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 151. Nombre: "'ME+MI+R'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 152. Nombre: "fijo13", Rango: "E38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 153. Nombre: "'ME+MI+R'!String2DUV", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 154. Nombre: "FCorrAccionSolarME", Rango: "L3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 155. Nombre: "folder0203", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 156. Nombre: "'R'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 157. Nombre: "'ME+MI+R'!String1MétodoInstalación", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 158. Nombre: "'ME+MI+R sobredim ajustado'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 159. Nombre: "IR", Rango: "R3", Hoja: "R", Ámbito: Global (en hoja: R)

// 160. Nombre: "'ME+MI+R'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 161. Nombre: "'ME+MI+R sobredim ajustado'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 162. Nombre: "'R'!InstalaciónTuboTipo", Rango: "W3", Hoja: "R", Ámbito: Global (en hoja: R)

// 163. Nombre: "Eq_calor_marca_1", Rango: "AC2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 164. Nombre: "'MI'!String2Isc", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 165. Nombre: "consumo15", Rango: "G33", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 166. Nombre: "'Repositorio'!IEE", Rango: "T27", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 167. Nombre: "'ME'!String1NDescarga", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 168. Nombre: "'ME+MI+R'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 169. Nombre: "SobredimensionamientoR", Rango: "K3", Hoja: "R", Ámbito: Global (en hoja: R)

// 170. Nombre: "ImMagnetoMI", Rango: "AJ3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 171. Nombre: "'DI'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 172. Nombre: "'MI'!NCablesTubo", Rango: "X3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 173. Nombre: "consumo11", Rango: "C33", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 174. Nombre: "'R'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 175. Nombre: "'ME'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 176. Nombre: "'ME+MI+R sobredim ajustado'!TensiónV", Rango: "E3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 177. Nombre: "'ME+MI+R sobredim ajustado'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 178. Nombre: "'R bien'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 179. Nombre: "IDI", Rango: "R3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 180. Nombre: "'R'!Red", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 181. Nombre: "'ME+MI+R'!String1Longitud", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 182. Nombre: "'ME+MI+R'!String2Conductividad", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 183. Nombre: "I2DI", Rango: "AP3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 184. Nombre: "'DI'!String1DUmax", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 185. Nombre: "CUPS", Rango: "G10", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 186. Nombre: "'MI'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 187. Nombre: "marcapellet", Rango: "D27", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 188. Nombre: "'ME'!SeccDI", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 189. Nombre: "CP", Rango: "G2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 190. Nombre: "'R bien'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 191. Nombre: "consumo14", Rango: "F33", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 192. Nombre: "direccion", Rango: "F2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 193. Nombre: "SobredimensionamientoME", Rango: "K3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 194. Nombre: "FCorrAccionSolarMI", Rango: "L3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 195. Nombre: "'ME'!String2Longitud", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 196. Nombre: "DUVDI", Rango: "AL3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 197. Nombre: "'MI'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 198. Nombre: "fecha", Rango: "D25", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 199. Nombre: "'DI'!MaterialCable", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 200. Nombre: "'DI'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 201. Nombre: "'Repositorio'!energeticaTariff20", Rango: "T5:T7", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 202. Nombre: "'ME+MI+R sobredim ajustado'!String1Udescargador", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 203. Nombre: "'R'!String2IntAdmisibleCable", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 204. Nombre: "'R'!String1FCorrTAmb", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 205. Nombre: "'ME+MI+R'!RedTensiónV", Rango: "O3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 206. Nombre: "'DI'!InFusiblegG", Rango: "BB3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 207. Nombre: "'ME'!String2IntAdmisibleCable", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 208. Nombre: "'R'!SeccDI", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 209. Nombre: "SecciónTeóricaDUMI", Rango: "U3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 210. Nombre: "numeroemisores", Rango: "T2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 211. Nombre: "'ME+MI+R'!String2FCorrTAmb", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 212. Nombre: "'DI'!String1InFusible", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 213. Nombre: "CurvaMagnetoME", Rango: "AK3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 214. Nombre: "'MI'!NpolosMagnetoMI", Rango: "AI3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 215. Nombre: "folder03", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 216. Nombre: "fijo14", Rango: "F38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 217. Nombre: "'R bien'!MétodoInstalaciónMI", Rango: "I3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 218. Nombre: "DUPrctgR", Rango: "AD3", Hoja: "R", Ámbito: Global (en hoja: R)

// 219. Nombre: "outputBill", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 220. Nombre: "'ME'!InvRedIdif", Rango: "AM3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 221. Nombre: "ahorro14", Rango: "F49", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 222. Nombre: "'DI'!String2IntAdmisibleIz", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 223. Nombre: "costeiva12", Rango: "D43", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 224. Nombre: "'ME'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 225. Nombre: "'ME+MI+R'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 226. Nombre: "IMI", Rango: "R3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 227. Nombre: "SobredimensionamientoAE", Rango: "I3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 228. Nombre: "'R bien'!InFusiblegG", Rango: "AS3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 229. Nombre: "'ME+MI+R sobredim ajustado'!String1Longitud", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 230. Nombre: "'MI'!String2DUPrctg", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 231. Nombre: "'MI'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 232. Nombre: "porcentaje13", Rango: "E51", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 233. Nombre: "'DI'!InMagneto", Rango: "AQ3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 234. Nombre: "'MI'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 235. Nombre: "'ME+MI+R sobredim ajustado'!String1NCablesTubo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 236. Nombre: "IccminDI", Rango: "AA3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 237. Nombre: "'ME+MI+R sobredim ajustado'!String1FCorrTAmb", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 238. Nombre: "'DI'!MaterialCable", Rango: "G3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 239. Nombre: "IVA", Rango: "T28", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 240. Nombre: "UpSobretDI", Rango: "AW3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 241. Nombre: "MétodoInstalaciónDI", Rango: "I3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 242. Nombre: "'R'!String2IntAdmisibleIz", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 243. Nombre: "'ME+MI+R sobredim ajustado'!String2Imp", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 244. Nombre: "TensiónVDI", Rango: "F3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 245. Nombre: "'ME+MI+R sobredim ajustado'!Modalidad", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 246. Nombre: "'ME+MI+R'!String2Imp", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 247. Nombre: "'Repositorio'!ASHPcurves", Rango: "P4:Q8764", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 248. Nombre: "'DI'!potenciaTotal", Rango: "B3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 249. Nombre: "'DI'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 250. Nombre: "impuesto12", Rango: "D40", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 251. Nombre: "'DI'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 252. Nombre: "'ME+MI+R sobredim ajustado'!String1SecciónEscogida", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 253. Nombre: "'DI'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 254. Nombre: "Eq_frio_marca_1", Rango: "AF2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 255. Nombre: "'ME'!String1Imp", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 256. Nombre: "IntME", Rango: "B3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 257. Nombre: "'R bien'!String2Imp", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 258. Nombre: "'ME'!String1IbSobredimensionamA", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 259. Nombre: "'DI'!Red", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 260. Nombre: "'ME+MI+R'!InFusiblegG", Rango: "AQ3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 261. Nombre: "'ME+MI+R sobredim ajustado'!String1Aislamiento", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 262. Nombre: "MfTfMI", Rango: "E3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 263. Nombre: "'R bien'!String2DUPrctg", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 264. Nombre: "DUmaxDI", Rango: "S3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 265. Nombre: "'R'!ImMagnetoR", Rango: "AJ3", Hoja: "R", Ámbito: Global (en hoja: R)

// 266. Nombre: "PDCMagnetoAE", Rango: "AJ3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 267. Nombre: "MfTfME", Rango: "E3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 268. Nombre: "ahorroiva12", Rango: "D50", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 269. Nombre: "'MI'!InstalaciónTuboTipo", Rango: "W3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 270. Nombre: "'ME'!String2DUV", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 271. Nombre: "'R bien'!String1NPaneles", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 272. Nombre: "'ME+MI+R'!String1Isc", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 273. Nombre: "'R'!Régimen", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 274. Nombre: "porcentaje14", Rango: "F51", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 275. Nombre: "'MI'!String2DUmax", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 276. Nombre: "'ME+MI+R sobredim ajustado'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 277. Nombre: "'ME'!String2DUPrctg", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 278. Nombre: "folder0200", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 279. Nombre: "'ME+MI+R sobredim ajustado'!FCorrAgrupamientoAE", Rango: "M3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 280. Nombre: "otros15", Rango: "G41", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 281. Nombre: "'R'!RedTensiónV", Rango: "Q3", Hoja: "R", Ámbito: Global (en hoja: R)

// 282. Nombre: "Eq_calor_sn_1", Rango: "AD2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 283. Nombre: "'R'!String2DUV", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 284. Nombre: "'R bien'!marcaEstructura", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 285. Nombre: "ahorro12", Rango: "D49", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 286. Nombre: "FCorrTAmbAE", Rango: "K3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 287. Nombre: "'ME+MI+R sobredim ajustado'!Iccmin", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 288. Nombre: "ahorroiva13", Rango: "E50", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 289. Nombre: "IAE", Rango: "P3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 290. Nombre: "'ME+MI+R sobredim ajustado'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 291. Nombre: "I2R", Rango: "AG3", Hoja: "R", Ámbito: Global (en hoja: R)

// 292. Nombre: "'R bien'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 293. Nombre: "IntMI", Rango: "B3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 294. Nombre: "precioivaleña", Rango: "E63", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 295. Nombre: "'ME+MI+R'!String2Ib", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 296. Nombre: "'MI'!IntAdmisibleIz", Rango: "AF3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 297. Nombre: "outputMemory", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 298. Nombre: "'R bien'!Red", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 299. Nombre: "'ME'!String1Aislamiento", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 300. Nombre: "'MI'!marcaEstructura", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 301. Nombre: "'R'!String1SecciónEscogida", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 302. Nombre: "'ME+MI+R sobredim ajustado'!TensiónVAE", Rango: "P3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 303. Nombre: "coste12", Rango: "D37", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 304. Nombre: "'MI'!String1Isc", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 305. Nombre: "'ME+MI+R sobredim ajustado'!String1Ib", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 306. Nombre: "ref_catastral", Rango: "AA2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 307. Nombre: "precioleña", Rango: "H17", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 308. Nombre: "'ME+MI+R sobredim ajustado'!IbSobredimensionamAAE", Rango: "N3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 309. Nombre: "'ME+MI+R'!String1TensiónVoc", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 310. Nombre: "'MI'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 311. Nombre: "'ME+MI+R sobredim ajustado'!String2FCorrTAmb", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 312. Nombre: "'MI'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 313. Nombre: "'R bien'!MaterialCable", Rango: "G3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 314. Nombre: "ivapellet", Rango: "G62", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 315. Nombre: "'R bien'!String1Nfusibles", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 316. Nombre: "direccionymas", Rango: "F3", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 317. Nombre: "MaterialCable", Rango: "G3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 318. Nombre: "IntAdmisibleIzME", Rango: "AF3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 319. Nombre: "'R'!PDCMagnetomo", Rango: "AL3", Hoja: "R", Ámbito: Global (en hoja: R)

// 320. Nombre: "'ME+MI+R'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 321. Nombre: "'ME+MI+R'!String2I2", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 322. Nombre: "'R bien'!String1DUV", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 323. Nombre: "consumo13", Rango: "E33", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 324. Nombre: "'ME+MI+R sobredim ajustado'!LongitudLGA", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 325. Nombre: "'DI'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 326. Nombre: "'ME+MI+R sobredim ajustado'!InMagneto", Rango: "AG3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 327. Nombre: "'MI'!potenciaTotalMI", Rango: "C3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 328. Nombre: "consumocombustible", Rango: "N2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 329. Nombre: "'ME'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 330. Nombre: "'MI'!IccmaxCable", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 331. Nombre: "'ME'!InstalaciónTuboTipo", Rango: "W3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 332. Nombre: "PDCMagnetoMI", Rango: "AL3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 333. Nombre: "listadoCodigosINEcomunidad", Rango: "AN4:AO12", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 334. Nombre: "'MI'!String1Udescargador", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 335. Nombre: "SeccTeoricaIadmDI", Rango: "P3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 336. Nombre: "'ME+MI+R'!NpolosMagnetoAE", Rango: "AG3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 337. Nombre: "'R bien'!String1NCablesTubo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 338. Nombre: "'DI'!String1Ib", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 339. Nombre: "'ME+MI+R'!ImaxSobret", Rango: "AO3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 340. Nombre: "'DI'!String1FCorrTAmb", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 341. Nombre: "'R'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 342. Nombre: "AislamientoAE", Rango: "H3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 343. Nombre: "nombreCompleto", Rango: "B3", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 344. Nombre: "'Repositorio'!energeticaPowerTariff20", Rango: "T16:T39", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 345. Nombre: "'ME+MI+R sobredim ajustado'!String1InFusible", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 346. Nombre: "SobredimensionamientoDI", Rango: "K3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 347. Nombre: "folder0204", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 348. Nombre: "'ME'!String2Isc", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 349. Nombre: "output01Folder", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 350. Nombre: "'ME'!String1SecciónEscogida", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 351. Nombre: "'DI'!PDCMagnetomoDI", Rango: "AU3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 352. Nombre: "'ME+MI+R'!IntAdmisibleCable", Rango: "Z3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 353. Nombre: "ahorroiva15", Rango: "G50", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 354. Nombre: "IntAdmisibleCableAE", Rango: "Z3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 355. Nombre: "'R'!String2Modulos", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 356. Nombre: "'R bien'!String1DUmax", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 357. Nombre: "'MI'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 358. Nombre: "'ME+MI+R sobredim ajustado'!FCorrAccionSolarAE", Rango: "K3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 359. Nombre: "'ME+MI+R sobredim ajustado'!SeccTeoricaIadmAE", Rango: "O3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 360. Nombre: "'R bien'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 361. Nombre: "'R bien'!Iccmin", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 362. Nombre: "'R'!String1DUV", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 363. Nombre: "'ME'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 364. Nombre: "'ME+MI+R sobredim ajustado'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 365. Nombre: "TensiónVMI", Rango: "F3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 366. Nombre: "costeiva11", Rango: "C43", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 367. Nombre: "'R bien'!InvRedPDCMagnetomo", Rango: "AL3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 368. Nombre: "'ME+MI+R sobredim ajustado'!InvRedPDCMagnetomo", Rango: "AK3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 369. Nombre: "impuesto13", Rango: "E40", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 370. Nombre: "'R bien'!InMagnetoMI", Rango: "AH3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 371. Nombre: "'R'!String2Imp", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 372. Nombre: "'R'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 373. Nombre: "'ME+MI+R sobredim ajustado'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 374. Nombre: "'DI'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 375. Nombre: "'R bien'!DUPrctgMI", Rango: "AD3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 376. Nombre: "'MI'!String2DUV", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 377. Nombre: "consumo12", Rango: "D33", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 378. Nombre: "'ME+MI+R sobredim ajustado'!InvRedNpolosMagneto", Rango: "AH3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 379. Nombre: "'MI'!String2Imp", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 380. Nombre: "'ME'!String2I2", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 381. Nombre: "'ME+MI+R'!Iccmax", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 382. Nombre: "impuesto11", Rango: "C40", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 383. Nombre: "'R bien'!NCablesTubo", Rango: "X3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 384. Nombre: "'DI'!String1MétodoInstalación", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 385. Nombre: "TensiónV", Rango: "D3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 386. Nombre: "'ME+MI+R'!IntAdmisibleIz", Rango: "AD3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 387. Nombre: "FCorrAccionSolarR", Rango: "L3", Hoja: "R", Ámbito: Global (en hoja: R)

// 388. Nombre: "'ME+MI+R sobredim ajustado'!String2I2", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 389. Nombre: "'R bien'!String2FCorrTAmb", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 390. Nombre: "'ME+MI+R sobredim ajustado'!String1MétodoInstalación", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 391. Nombre: "'ME'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 392. Nombre: "'R bien'!extraEstructura", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 393. Nombre: "'R bien'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 394. Nombre: "'ME+MI+R sobredim ajustado'!InFusiblegG", Rango: "AR3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 395. Nombre: "'DI'!InstalaciónTuboTipoDI", Rango: "AF3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 396. Nombre: "'R'!String1Aislamiento", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 397. Nombre: "I2MI", Rango: "AG3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 398. Nombre: "InFusiblegGDI", Rango: "BB3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 399. Nombre: "'DI'!String1Udescargador", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 400. Nombre: "FCorrAccionSolarDI", Rango: "L3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 401. Nombre: "'Repositorio'!nationalHolidays", Rango: "#REF!", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 402. Nombre: "ingenieras", Rango: "AD6:AL10", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 403. Nombre: "distribuidora", Rango: "G8", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 404. Nombre: "'ME'!String1NCablesTubo", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 405. Nombre: "'ME+MI+R sobredim ajustado'!InvRedSeccLGA", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 406. Nombre: "'DI'!String1Longitud", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 407. Nombre: "ImMagnetoDI", Rango: "AS3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 408. Nombre: "CUPScliente", Rango: "G9", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 409. Nombre: "'R'!LongitudDI", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 410. Nombre: "'R bien'!String2Aislamiento", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 411. Nombre: "'Repositorio'!energeticaTariff30", Rango: "U5:U10", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 412. Nombre: "'DI'!String1NDescarga", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 413. Nombre: "folder01", Rango: "G4:H4", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 414. Nombre: "InstalaciónTuboTipoR", Rango: "W3", Hoja: "R", Ámbito: Global (en hoja: R)

// 415. Nombre: "'DI'!String2IntAdmisibleCable", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 416. Nombre: "'R bien'!TensiónVMI", Rango: "F3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 417. Nombre: "'R bien'!FCorrAgrupamientoMI", Rango: "N3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 418. Nombre: "listadoCodigosINEmunicipio", Rango: "AQ4:AR2251", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 419. Nombre: "'ME+MI+R sobredim ajustado'!IbAE", Rango: "AD3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 420. Nombre: "'ME+MI+R sobredim ajustado'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 421. Nombre: "DUPrctgME", Rango: "AD3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 422. Nombre: "DiametroTuboEscogidoME", Rango: "AA3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 423. Nombre: "'MI'!InvRedPDCMagnetomo", Rango: "AL3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 424. Nombre: "'ME+MI+R'!Modalidad", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 425. Nombre: "municipio", Rango: "H2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 426. Nombre: "DUmaxME", Rango: "S3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 427. Nombre: "'ME+MI+R'!InMagneto", Rango: "AF3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 428. Nombre: "'R'!String2Aislamiento", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 429. Nombre: "ivaleña", Rango: "E62", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 430. Nombre: "'DI'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 431. Nombre: "'ME+MI+R sobredim ajustado'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 432. Nombre: "'ME+MI+R'!String1Nfusibles", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 433. Nombre: "IntAdmisibleCableME", Rango: "AB3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 434. Nombre: "'ME+MI+R sobredim ajustado'!String2DUmax", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 435. Nombre: "modelopellet", Rango: "C27", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 436. Nombre: "InMagnetoDI", Rango: "AQ3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 437. Nombre: "'R bien'!FCorrAccionSolarMI", Rango: "L3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 438. Nombre: "'ME'!String1Ib", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 439. Nombre: "'R'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 440. Nombre: "'R'!String1Conductividad", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 441. Nombre: "'ME+MI+R sobredim ajustado'!Iccmax", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 442. Nombre: "'R'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 443. Nombre: "'R bien'!String1NDescarga", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 444. Nombre: "IbR", Rango: "AE3", Hoja: "R", Ámbito: Global (en hoja: R)

// 445. Nombre: "COP", Rango: "I24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 446. Nombre: "FCorrAccionSolarAE", Rango: "J3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 447. Nombre: "'ME+MI+R sobredim ajustado'!Red", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 448. Nombre: "fijo11", Rango: "C38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 449. Nombre: "costetotal13", Rango: "E42", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 450. Nombre: "'ME+MI+R sobredim ajustado'!DUmaxAE", Rango: "R3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 451. Nombre: "'ME+MI+R'!MaterialCable", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 452. Nombre: "'ME+MI+R sobredim ajustado'!RedTensiónV", Rango: "P3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 453. Nombre: "acumulacion", Rango: "B74", Hoja: "ACS", Ámbito: Global (en hoja: ACS)

// 454. Nombre: "'R bien'!SeccTeoricaIadmMI", Rango: "P3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 455. Nombre: "DUVMI", Rango: "AC3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 456. Nombre: "folder0201", Rango: "#REF!", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 457. Nombre: "'ME+MI+R'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 458. Nombre: "'Repositorio'!energeticaTariff61", Rango: "V5:V10", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 459. Nombre: "'R'!IccmaxCable", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 460. Nombre: "'R bien'!Modalidad", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 461. Nombre: "'R bien'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 462. Nombre: "'MI'!String2Ib", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 463. Nombre: "'R bien'!String2I2", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 464. Nombre: "rawCUPS", Rango: "Z2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 465. Nombre: "'DI'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 466. Nombre: "'ME+MI+R sobredim ajustado'!InSobretAE", Rango: "AO3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 467. Nombre: "'DI'!String1SecciónEscogida", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 468. Nombre: "SobredimensionamientoMI", Rango: "K3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 469. Nombre: "potencialeña", Rango: "E25", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 470. Nombre: "LongitudDI", Rango: "H3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 471. Nombre: "'R'!InvRedIdif", Rango: "AM3", Hoja: "R", Ámbito: Global (en hoja: R)

// 472. Nombre: "'DI'!String2DUV", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 473. Nombre: "deposito", Rango: "G24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 474. Nombre: "'R'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 475. Nombre: "'R'!String1Nfusibles", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 476. Nombre: "DUmaxR", Rango: "S3", Hoja: "R", Ámbito: Global (en hoja: R)

// 477. Nombre: "'R bien'!IbMI", Rango: "AE3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 478. Nombre: "rendimiento11", Rango: "C34", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 479. Nombre: "'MI'!InvRedIdif", Rango: "AM3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 480. Nombre: "FCorrTAmbMI", Rango: "M3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 481. Nombre: "FCorrAgrupamientoDI", Rango: "N3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 482. Nombre: "preciounidad", Rango: "C17", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 483. Nombre: "MétodoInstalaciónAE", Rango: "G3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 484. Nombre: "potenciaAE", Rango: "E24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 485. Nombre: "'MI'!String1NDescarga", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 486. Nombre: "'ME+MI+R sobredim ajustado'!String1NDescarga", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 487. Nombre: "'DI'!String2Aislamiento", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 488. Nombre: "simel", Rango: "G7", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 489. Nombre: "costeleña", Rango: "E61", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 490. Nombre: "'ME+MI+R'!InvRedPDCMagnetomo", Rango: "AJ3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 491. Nombre: "'ME+MI+R'!String1DUmax", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 492. Nombre: "'R bien'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 493. Nombre: "emisiones12", Rango: "D36", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 494. Nombre: "fecha_pruebas", Rango: "AH2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 495. Nombre: "'ME+MI+R'!String1SecciónEscogida", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 496. Nombre: "ahorro15", Rango: "G49", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 497. Nombre: "FCorrTAmbME", Rango: "M3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 498. Nombre: "'MI'!extraEstructura", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 499. Nombre: "'R'!I2gG", Rango: "AR3", Hoja: "R", Ámbito: Global (en hoja: R)

// 500. Nombre: "'MI'!InFusiblegG", Rango: "AS3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 501. Nombre: "NCablesTuboMI", Rango: "X3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 502. Nombre: "'R'!String1Ib", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 503. Nombre: "'MI'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 504. Nombre: "IntAdmisibleIzR", Rango: "AF3", Hoja: "R", Ámbito: Global (en hoja: R)

// 505. Nombre: "'R'!String2Longitud", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 506. Nombre: "ZmaxDI", Rango: "Y3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 507. Nombre: "N.DNI", Rango: "Y2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 508. Nombre: "'R bien'!DUmaxMI", Rango: "S3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 509. Nombre: "'ME+MI+R sobredim ajustado'!String1Nfusibles", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 510. Nombre: "'R'!String2I2", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 511. Nombre: "otros14", Rango: "F41", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 512. Nombre: "'ME+MI+R'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 513. Nombre: "'ME+MI+R sobredim ajustado'!MaterialCable", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 514. Nombre: "'ME+MI+R sobredim ajustado'!String1TensiónVmp", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 515. Nombre: "'ME+MI+R sobredim ajustado'!InstalaciónTuboTipoAE", Rango: "V3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 516. Nombre: "'ME'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 517. Nombre: "'R bien'!InvRedSeccDI", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 518. Nombre: "NpolosMagnetoR", Rango: "AI3", Hoja: "R", Ámbito: Global (en hoja: R)

// 519. Nombre: "ahorro13", Rango: "E49", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 520. Nombre: "'ME+MI+R sobredim ajustado'!potenciaTotalAE", Rango: "A3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 521. Nombre: "plantas", Rango: "Q2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 522. Nombre: "'R bien'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 523. Nombre: "MfTfDI", Rango: "E3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 524. Nombre: "impuesto14", Rango: "F40", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 525. Nombre: "energia11", Rango: "C35", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 526. Nombre: "'ME'!String1MétodoInstalación", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 527. Nombre: "'ME+MI+R sobredim ajustado'!InMagnetoAE", Rango: "AG3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 528. Nombre: "'R'!String2DUmax", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 529. Nombre: "'R bien'!String2IntAdmisibleCable", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 530. Nombre: "'MI'!NpolosMagneto", Rango: "AI3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 531. Nombre: "IbDI", Rango: "AN3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 532. Nombre: "fijo12", Rango: "D38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 533. Nombre: "UservpSobretAE", Rango: "AM3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 534. Nombre: "'ME+MI+R'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 535. Nombre: "'R'!String1Udescargador", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 536. Nombre: "'ME'!Régimen", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 537. Nombre: "'ME+MI+R'!String1I2", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 538. Nombre: "'ME+MI+R'!String1NDescarga", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 539. Nombre: "'ME+MI+R sobredim ajustado'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 540. Nombre: "'ME'!String1Conductividad", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 541. Nombre: "AislamientoME", Rango: "J3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 542. Nombre: "'R bien'!DiametroTuboEscogidoMI", Rango: "AA3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 543. Nombre: "'ME+MI+R'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 544. Nombre: "'Repositorio'!normalizedPowersOrbis", Rango: "X7:Y21", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 545. Nombre: "'ME+MI+R sobredim ajustado'!FCorrTAmbAE", Rango: "L3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 546. Nombre: "'ME+MI+R sobredim ajustado'!String2DUV", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 547. Nombre: "'ME+MI+R sobredim ajustado'!PDCMagnetoAE", Rango: "AK3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 548. Nombre: "'R'!Modalidad", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 549. Nombre: "'ME'!monotrif", Rango: "E3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 550. Nombre: "'DI'!String1NPaneles", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 551. Nombre: "'ME+MI+R'!String1DUV", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 552. Nombre: "'ME+MI+R'!String1Conductividad", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 553. Nombre: "'ME'!ImaxSobret", Rango: "AQ3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 554. Nombre: "coste11", Rango: "C37", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 555. Nombre: "'ME'!InvRedSeccDI", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 556. Nombre: "DUVAE", Rango: "AA3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 557. Nombre: "'MI'!String2I2", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 558. Nombre: "'R bien'!FCorrTAmbMI", Rango: "M3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 559. Nombre: "'DI'!InSobret", Rango: "AY3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 560. Nombre: "'ME+MI+R sobredim ajustado'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 561. Nombre: "'R'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 562. Nombre: "'R'!InvRedNpolosMagneto", Rango: "AI3", Hoja: "R", Ámbito: Global (en hoja: R)

// 563. Nombre: "'MI'!InMagnetoMI", Rango: "AH3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 564. Nombre: "PDCMagnetoDI", Rango: "AU3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 565. Nombre: "'R'!NCablesTubo", Rango: "X3", Hoja: "R", Ámbito: Global (en hoja: R)

// 566. Nombre: "depositoleña", Rango: "G25", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 567. Nombre: "modeloleña", Rango: "C25", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 568. Nombre: "IbSobredimensionamADI", Rango: "O3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 569. Nombre: "NCablesTuboME", Rango: "X3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 570. Nombre: "nCOIIM", Rango: "D22", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 571. Nombre: "I2AE", Rango: "AE3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 572. Nombre: "SeccTeoricaIadmME", Rango: "P3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 573. Nombre: "'R'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 574. Nombre: "'R bien'!potenciaTotalMI", Rango: "C3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 575. Nombre: "'R bien'!IntAdmisibleIzMI", Rango: "AF3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 576. Nombre: "'R'!monotrif", Rango: "E3", Hoja: "R", Ámbito: Global (en hoja: R)

// 577. Nombre: "SecciónTeóricaDUDI", Rango: "U3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 578. Nombre: "listadoProvincias", Rango: "AN4:AN12", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 579. Nombre: "'R'!potenciaTotalR", Rango: "C3", Hoja: "R", Ámbito: Global (en hoja: R)

// 580. Nombre: "'MI'!String1DUmax", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 581. Nombre: "'ME+MI+R sobredim ajustado'!LongitudAE", Rango: "G3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 582. Nombre: "'MI'!ImaxSobret", Rango: "AQ3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 583. Nombre: "costeE11", Rango: "C39", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 584. Nombre: "'R bien'!NpolosMagneto", Rango: "AI3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 585. Nombre: "'R'!String1DUPrctg", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 586. Nombre: "'DI'!String1TensiónVmp", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 587. Nombre: "'ME+MI+R'!String1NCablesTubo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 588. Nombre: "'R bien'!IccmaxCable", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 589. Nombre: "'MI'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 590. Nombre: "outputFolder", Rango: "H4", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 591. Nombre: "SecciónEscogidaAE", Rango: "T3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 592. Nombre: "CurvaMagnetoMI", Rango: "AK3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 593. Nombre: "'ME+MI+R'!InvRedNpolosMagneto", Rango: "AG3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 594. Nombre: "MaterialCable", Rango: "G3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 595. Nombre: "otros12", Rango: "D41", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 596. Nombre: "'DI'!String2Longitud", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 597. Nombre: "'R'!String2InFusible", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 598. Nombre: "'R bien'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 599. Nombre: "DUPrctgDI", Rango: "AM3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 600. Nombre: "MfTfR", Rango: "E3", Hoja: "R", Ámbito: Global (en hoja: R)

// 601. Nombre: "precioivapellet", Rango: "G63", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 602. Nombre: "emisores", Rango: "S2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 603. Nombre: "'DI'!String2Ib", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 604. Nombre: "'ME+MI+R sobredim ajustado'!marcaEstructura", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 605. Nombre: "telefono", Rango: "D2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 606. Nombre: "'DI'!InvRedNpolosMagneto", Rango: "AR3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 607. Nombre: "'R'!String1InFusible", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 608. Nombre: "'ME'!String2IntAdmisibleIz", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 609. Nombre: "potenciaTotalAE", Rango: "A3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 610. Nombre: "coste13", Rango: "E37", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 611. Nombre: "'MI'!String2FCorrTAmb", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 612. Nombre: "'DI'!InvRedIdif", Rango: "AV3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 613. Nombre: "'ME'!Iccmin", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 614. Nombre: "marcaAE", Rango: "D24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 615. Nombre: "SecciónEscogidaMI", Rango: "V3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 616. Nombre: "'MI'!MaterialCable", Rango: "G3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 617. Nombre: "'ME'!String1Longitud", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 618. Nombre: "'ME+MI+R sobredim ajustado'!ImaxSobretAE", Rango: "AP3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 619. Nombre: "'MI'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 620. Nombre: "InstalaciónTuboTipoAE", Rango: "U3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 621. Nombre: "LongitudMI", Rango: "H3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 622. Nombre: "'ME+MI+R sobredim ajustado'!MaterialCable", Rango: "F3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 623. Nombre: "IntAdmisibleCableMI", Rango: "AB3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 624. Nombre: "'MI'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 625. Nombre: "elementos", Rango: "U2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 626. Nombre: "'R bien'!CurvaMagnetoMI", Rango: "AK3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 627. Nombre: "'DI'!String1Conductividad", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 628. Nombre: "'MI'!String1DUPrctg", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 629. Nombre: "'R bien'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 630. Nombre: "'R bien'!String2DUmax", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 631. Nombre: "'R'!String1MétodoInstalación", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 632. Nombre: "DiametroTuboEscogidoMI", Rango: "AA3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 633. Nombre: "'R bien'!PDCMagnetoMI", Rango: "AL3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 634. Nombre: "emisiones11", Rango: "C36", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 635. Nombre: "'ME'!PDCMagnetomo", Rango: "AL3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 636. Nombre: "'ME+MI+R sobredim ajustado'!UpSobretAE", Rango: "AM3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 637. Nombre: "UservpSobretDI", Rango: "AX3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 638. Nombre: "'MI'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 639. Nombre: "DUmaxAE", Rango: "Q3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 640. Nombre: "'Repositorio'!energeticaPowerTariff61", Rango: "V16:V21", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 641. Nombre: "'ME+MI+R sobredim ajustado'!DUVAE", Rango: "AB3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 642. Nombre: "'ME+MI+R'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 643. Nombre: "ahorroiva14", Rango: "F50", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 644. Nombre: "'R bien'!String1MétodoInstalación", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 645. Nombre: "'R bien'!String1Conductividad", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 646. Nombre: "nombre", Rango: "B2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 647. Nombre: "superficie", Rango: "R2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 648. Nombre: "'ME+MI+R'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 649. Nombre: "InSobretDI", Rango: "AY3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 650. Nombre: "'MI'!Régimen", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 651. Nombre: "'R'!String1NPaneles", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 652. Nombre: "'MI'!String2InFusible", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 653. Nombre: "temperaturaCorte", Rango: "C94", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 654. Nombre: "'ME+MI+R'!String1InFusible", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 655. Nombre: "'R bien'!Régimen", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 656. Nombre: "'ME'!String1Nfusibles", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 657. Nombre: "'ME+MI+R sobredim ajustado'!String2InFusible", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 658. Nombre: "I2gGDI", Rango: "BA3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 659. Nombre: "InSobretAE", Rango: "AN3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 660. Nombre: "Ninstalador", Rango: "D23", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 661. Nombre: "'ME+MI+R sobredim ajustado'!I2AE", Rango: "AF3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 662. Nombre: "'MI'!String1Ib", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 663. Nombre: "'ME'!String2FCorrTAmb", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 664. Nombre: "'MI'!String1Longitud", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 665. Nombre: "'R bien'!AislamientoMI", Rango: "J3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 666. Nombre: "Metodos", Rango: "C44:AH59", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 667. Nombre: "apellidoIngenieraSegundo", Rango: "D20", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 668. Nombre: "Secciones", Rango: "B44:B59", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 669. Nombre: "otros13", Rango: "E41", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 670. Nombre: "InMagnetoR", Rango: "AH3", Hoja: "R", Ámbito: Global (en hoja: R)

// 671. Nombre: "otros11", Rango: "C41", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 672. Nombre: "'ME+MI+R sobredim ajustado'!ImaxSobret", Rango: "AP3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 673. Nombre: "'R bien'!String2Ib", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 674. Nombre: "'ME'!extraEstructura", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 675. Nombre: "IntAdmisibleCableR", Rango: "AB3", Hoja: "R", Ámbito: Global (en hoja: R)

// 676. Nombre: "MfTfAE", Rango: "C3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 677. Nombre: "'ME+MI+R'!LongitudLGA", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 678. Nombre: "'ME+MI+R'!InstalaciónTuboTipo", Rango: "U3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 679. Nombre: "'ME+MI+R'!String1FCorrTAmb", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 680. Nombre: "apellidos", Rango: "C2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 681. Nombre: "'ME+MI+R sobredim ajustado'!IntAdmisibleIzAE", Rango: "AE3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 682. Nombre: "'MI'!String1NCablesTubo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 683. Nombre: "'R'!String2Conductividad", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 684. Nombre: "FCorrAgrupamientoME", Rango: "N3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 685. Nombre: "'ME'!String1FCorrTAmb", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 686. Nombre: "'R'!marcaEstructura", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 687. Nombre: "'MI'!Modalidad", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 688. Nombre: "'ME+MI+R'!String2InFusible", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 689. Nombre: "'Repositorio'!normalizedPowersFronius", Rango: "AA7:AB38", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 690. Nombre: "'ME+MI+R'!Red", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 691. Nombre: "'ME+MI+R'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 692. Nombre: "costeiva14", Rango: "F43", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 693. Nombre: "FCorrTAmbR", Rango: "M3", Hoja: "R", Ámbito: Global (en hoja: R)

// 694. Nombre: "'R bien'!InstalaciónTuboTipo", Rango: "W3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 695. Nombre: "listadoMunicipios", Rango: "AQ4:AQ2251", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 696. Nombre: "energia12", Rango: "D35", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 697. Nombre: "'ME+MI+R'!SeccDI", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 698. Nombre: "'MI'!MaterialCable", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 699. Nombre: "'ME+MI+R'!MaterialCable", Rango: "E3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 700. Nombre: "'ME+MI+R'!String1Imp", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 701. Nombre: "'DI'!PDCMagnetomo", Rango: "AU3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 702. Nombre: "'ME'!marcaEstructura", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 703. Nombre: "'R bien'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 704. Nombre: "'DI'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 705. Nombre: "SecciónEscogidaR", Rango: "V3", Hoja: "R", Ámbito: Global (en hoja: R)

// 706. Nombre: "'ME+MI+R sobredim ajustado'!String1Conductividad", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 707. Nombre: "'R bien'!IntAdmisibleIz", Rango: "AF3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 708. Nombre: "IbSobredimensionamAME", Rango: "O3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 709. Nombre: "CurvaMagnetoR", Rango: "AK3", Hoja: "R", Ámbito: Global (en hoja: R)

// 710. Nombre: "LongitudME", Rango: "H3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 711. Nombre: "'R bien'!SecciónTeóricaDUMI", Rango: "U3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 712. Nombre: "DUVR", Rango: "AC3", Hoja: "R", Ámbito: Global (en hoja: R)

// 713. Nombre: "AislamientoMI", Rango: "J3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 714. Nombre: "costeE12", Rango: "D39", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 715. Nombre: "Magnetotermico", Rango: "D98:D101", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 716. Nombre: "TensiónVR", Rango: "F3", Hoja: "R", Ámbito: Global (en hoja: R)

// 717. Nombre: "mail", Rango: "E2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 718. Nombre: "'DI'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 719. Nombre: "'ME'!String1TensiónVmp", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 720. Nombre: "ivaaerotermia", Rango: "C62", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 721. Nombre: "'DI'!I2gG", Rango: "BA3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 722. Nombre: "'R bien'!RedTensiónV", Rango: "Q3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 723. Nombre: "'DI'!marcaEstructura", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 724. Nombre: "'DI'!String2DUmax", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 725. Nombre: "'R'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 726. Nombre: "'R bien'!String2InFusible", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 727. Nombre: "'R bien'!NCablesTuboMI", Rango: "X3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 728. Nombre: "'ME'!String1Udescargador", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 729. Nombre: "'MI'!String2Longitud", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 730. Nombre: "'ME+MI+R sobredim ajustado'!CurvaMagnetoAE", Rango: "AJ3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 731. Nombre: "SeccLGA", Rango: "W3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 732. Nombre: "FCorrAgrupamientoR", Rango: "N3", Hoja: "R", Ámbito: Global (en hoja: R)

// 733. Nombre: "'ME'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 734. Nombre: "costeE15", Rango: "G39", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 735. Nombre: "subirpotencia", Rango: "I38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 736. Nombre: "'R'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 737. Nombre: "emisiones14", Rango: "F36", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 738. Nombre: "'DI'!extraEstructura", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 739. Nombre: "'ME+MI+R'!monotrif", Rango: "C3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 740. Nombre: "'ME+MI+R'!InvRedSeccLGA", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 741. Nombre: "'R bien'!String1FCorrTAmb", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 742. Nombre: "'R bien'!String2DUV", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 743. Nombre: "'R bien'!String1Longitud", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 744. Nombre: "'ME+MI+R'!String1Aislamiento", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 745. Nombre: "'MI'!SeccDI", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 746. Nombre: "SeccTeoricaIadmMI", Rango: "P3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 747. Nombre: "modelo", Rango: "C24", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 748. Nombre: "'ME'!String1UfusibleMínimo", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 749. Nombre: "'ME+MI+R'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 750. Nombre: "'MI'!String1Conductividad", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 751. Nombre: "'MI'!String1TensiónVoc", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 752. Nombre: "'MI'!String1TensiónVmp", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 753. Nombre: "'DI'!Régimen", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 754. Nombre: "folder0202", Rango: "H15", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 755. Nombre: "'R bien'!LongitudMI", Rango: "H3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 756. Nombre: "'ME'!String2Imp", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 757. Nombre: "AislamientoR", Rango: "J3", Hoja: "R", Ámbito: Global (en hoja: R)

// 758. Nombre: "'DI'!String1Aislamiento", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 759. Nombre: "coste15", Rango: "G37", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 760. Nombre: "'ME+MI+R sobredim ajustado'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 761. Nombre: "'DI'!LongitudLGA", Rango: "V3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 762. Nombre: "'ME+MI+R'!String2DUPrctg", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 763. Nombre: "'DI'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 764. Nombre: "PDCMagnetoME", Rango: "AL3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 765. Nombre: "InMagnetoME", Rango: "AH3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 766. Nombre: "'ME'!NpolosMagneto", Rango: "AI3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 767. Nombre: "'MI'!String1Imp", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 768. Nombre: "'R'!String1TensiónVmp", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 769. Nombre: "'ME+MI+R sobredim ajustado'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 770. Nombre: "IntR", Rango: "B3", Hoja: "R", Ámbito: Global (en hoja: R)

// 771. Nombre: "'MI'!LongitudLGA", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 772. Nombre: "'R bien'!IMI", Rango: "R3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 773. Nombre: "'MI'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 774. Nombre: "'R'!InvRedSeccDI", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 775. Nombre: "'ME'!InvRedPDCMagnetomo", Rango: "AL3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 776. Nombre: "rendimiento12", Rango: "D34", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 777. Nombre: "'R'!MaterialCable", Rango: "G3", Hoja: "R", Ámbito: Global (en hoja: R)

// 778. Nombre: "'R bien'!String1SecciónEscogida", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 779. Nombre: "'DI'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 780. Nombre: "'ME+MI+R sobredim ajustado'!NCablesTuboAE", Rango: "W3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 781. Nombre: "'R'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 782. Nombre: "'R bien'!ImMagnetoMI", Rango: "AJ3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 783. Nombre: "'R bien'!String1InFusible", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 784. Nombre: "'ME+MI+R'!Iccmin", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 785. Nombre: "'R'!String1Imp", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 786. Nombre: "'ME'!String1FCorrAccionSolar", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 787. Nombre: "'ME'!String2Aislamiento", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 788. Nombre: "altura", Rango: "X2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 789. Nombre: "'ME+MI+R sobredim ajustado'!InvRedSeccDI", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 790. Nombre: "'ME+MI+R'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 791. Nombre: "'Tablas'!SISTEMA", Rango: "B25:B26", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 792. Nombre: "combustible", Rango: "M2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 793. Nombre: "'R bien'!ImaxSobret", Rango: "AQ3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 794. Nombre: "'ME'!String1DUPrctg", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 795. Nombre: "tel", Rango: "D3", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 796. Nombre: "'ME+MI+R sobredim ajustado'!SobredimensionamientoAE", Rango: "J3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 797. Nombre: "'MI'!String2DiametroTuboEscogido", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 798. Nombre: "'R'!String1I2", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 799. Nombre: "'ME'!MaterialCable", Rango: "G3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 800. Nombre: "LongitudR", Rango: "H3", Hoja: "R", Ámbito: Global (en hoja: R)

// 801. Nombre: "'ME+MI+R'!String1InstalaciónTuboTipo", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 802. Nombre: "'R bien'!String1FCorrAgrupamiento", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 803. Nombre: "'ME+MI+R sobredim ajustado'!monotrif", Rango: "D3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 804. Nombre: "'ME+MI+R sobredim ajustado'!IAE", Rango: "Q3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 805. Nombre: "'ME+MI+R'!String1TensiónVmp", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 806. Nombre: "'ME'!String2Ib", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 807. Nombre: "'ME+MI+R sobredim ajustado'!String1Imp", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 808. Nombre: "DUVME", Rango: "AC3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 809. Nombre: "potenciaTotalDIBOEL", Rango: "C3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 810. Nombre: "'R bien'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 811. Nombre: "fijo15", Rango: "G38", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 812. Nombre: "'DI'!String1TensiónVoc", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 813. Nombre: "eq_calor_tipo_1", Rango: "AB2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 814. Nombre: "FCorrAgrupamientoAE", Rango: "L3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 815. Nombre: "IdifDI", Rango: "AV3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 816. Nombre: "'ME+MI+R sobredim ajustado'!String2DiametroTuboMIN", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 817. Nombre: "'DI'!String1NCablesTubo", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 818. Nombre: "'R'!InMagneto", Rango: "AH3", Hoja: "R", Ámbito: Global (en hoja: R)

// 819. Nombre: "'DI'!String1IntAdmisibleIz", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 820. Nombre: "'DI'!SeccDI", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 821. Nombre: "rendimiento13", Rango: "E34", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 822. Nombre: "'R'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 823. Nombre: "ImaxSobretDI", Rango: "AZ3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 824. Nombre: "costeiva13", Rango: "E43", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 825. Nombre: "'ME'!potenciaTotal", Rango: "C3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 826. Nombre: "I2ME", Rango: "AG3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 827. Nombre: "'R bien'!InvRedIdif", Rango: "AM3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 828. Nombre: "'R bien'!NpolosMagnetoMI", Rango: "AI3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 829. Nombre: "'R bien'!String1TensiónVmp", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 830. Nombre: "preciopellet", Rango: "G61", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 831. Nombre: "Eq_frio_sn_1", Rango: "AG2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 832. Nombre: "IntAdmisibleIzAE", Rango: "AD3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 833. Nombre: "DUPrctgMI", Rango: "AD3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 834. Nombre: "'ME+MI+R sobredim ajustado'!String2Conductividad", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 835. Nombre: "outputRITE", Rango: "H10", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 836. Nombre: "'DI'!String2FCorrTAmb", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 837. Nombre: "'MI'!String1MétodoInstalación", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 838. Nombre: "'R bien'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 839. Nombre: "'ME+MI+R'!String2IntAdmisibleIz", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 840. Nombre: "'ME+MI+R sobredim ajustado'!SecciónEscogidaAE", Rango: "U3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 841. Nombre: "'R bien'!InSobret", Rango: "AP3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 842. Nombre: "rendimientoleña", Rango: "F25", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 843. Nombre: "NpolosMagnetoME", Rango: "AI3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 844. Nombre: "'ME'!String1NPaneles", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 845. Nombre: "InstalaciónTuboTipoME", Rango: "W3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 846. Nombre: "'R'!PDCMagnetoR", Rango: "AL3", Hoja: "R", Ámbito: Global (en hoja: R)

// 847. Nombre: "'R'!String1Isc", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 848. Nombre: "'ME+MI+R'!String1Udescargador", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 849. Nombre: "'MI'!InSobret", Rango: "AP3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 850. Nombre: "'ME+MI+R sobredim ajustado'!String1IbSobredimensionamA", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 851. Nombre: "'R bien'!SobredimensionamientoMI", Rango: "K3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 852. Nombre: "'R bien'!String1Ib", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 853. Nombre: "'ME'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 854. Nombre: "'R bien'!LongitudLGA", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 855. Nombre: "'ME+MI+R sobredim ajustado'!String1TensiónVoc", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 856. Nombre: "'R bien'!String1SecciónTeóricaDU", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 857. Nombre: "'ME+MI+R sobredim ajustado'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 858. Nombre: "energia14", Rango: "F35", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 859. Nombre: "'R'!String2DUPrctg", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 860. Nombre: "'ME+MI+R sobredim ajustado'!IntAdmisibleCable", Rango: "AA3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 861. Nombre: "SecciónTeóricaDUR", Rango: "U3", Hoja: "R", Ámbito: Global (en hoja: R)

// 862. Nombre: "InstalaciónTuboTipoMI", Rango: "W3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 863. Nombre: "'R'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 864. Nombre: "'R'!String2IbSobredimensionamA", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 865. Nombre: "precio", Rango: "C61", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 866. Nombre: "energia13", Rango: "E35", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 867. Nombre: "'ME'!String1I2", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 868. Nombre: "'R bien'!monotrif", Rango: "E3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 869. Nombre: "vivienda", Rango: "J2", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 870. Nombre: "nombreIngeniera", Rango: "D18", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 871. Nombre: "'ME+MI+R sobredim ajustado'!String2Aislamiento", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 872. Nombre: "'MI'!Iccmax", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 873. Nombre: "'ME+MI+R sobredim ajustado'!UservpSobretAE", Rango: "AN3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 874. Nombre: "precioiva", Rango: "C63", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 875. Nombre: "'ME'!String1SeccTeoricaIadm", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 876. Nombre: "CurvaMagnetoDI", Rango: "AT3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 877. Nombre: "municipioINE", Rango: "D9", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 878. Nombre: "'ME'!InMagneto", Rango: "AH3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 879. Nombre: "DUmaxMI", Rango: "S3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 880. Nombre: "'ME+MI+R sobredim ajustado'!MétodoInstalaciónAE", Rango: "H3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 881. Nombre: "'MI'!String2Conductividad", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 882. Nombre: "'R'!Iccmax", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 883. Nombre: "porcentaje15", Rango: "G51", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 884. Nombre: "'R bien'!SeccDI", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 885. Nombre: "'R'!String1IbSobredimensionamA", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 886. Nombre: "DiametroTuboEscogidoR", Rango: "AA3", Hoja: "R", Ámbito: Global (en hoja: R)

// 887. Nombre: "'MI'!String1Nfusibles", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 888. Nombre: "'R bien'!String1DUPrctg", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 889. Nombre: "FCorrAgrupamientoMI", Rango: "N3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 890. Nombre: "elementosnecesarios", Rango: "T4", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 891. Nombre: "'R bien'!String1DiametroTuboEscogido", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 892. Nombre: "'MI'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 893. Nombre: "'ME+MI+R sobredim ajustado'!String2IntAdmisibleIz", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 894. Nombre: "MétodoInstalaciónMI", Rango: "I3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 895. Nombre: "costetotal14", Rango: "F42", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 896. Nombre: "'ME+MI+R sobredim ajustado'!String2FCorrAccionSolar", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 897. Nombre: "'DI'!String1Isc", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 898. Nombre: "'R bien'!String2Isc", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 899. Nombre: "'Tablas'!Monofásico", Rango: "F25:F26", Hoja: "Tablas", Ámbito: Global (en hoja: Tablas)

// 900. Nombre: "InMagnetoAE", Rango: "AF3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 901. Nombre: "'ME+MI+R sobredim ajustado'!AislamientoAE", Rango: "I3", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 902. Nombre: "'R bien'!String1Imp", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 903. Nombre: "costeE14", Rango: "F39", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 904. Nombre: "'R'!MaterialCable", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 905. Nombre: "ImaxSobretAE", Rango: "AO3", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 906. Nombre: "DiametroTuboMINDI", Rango: "AJ3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 907. Nombre: "'ME+MI+R sobredim ajustado'!String2IfusibleMínimo", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 908. Nombre: "'Repositorio'!allTariffPrices", Rango: "T34", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 909. Nombre: "'ME'!String1InFusible", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 910. Nombre: "'MI'!String2InstalaciónTuboTipo", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 911. Nombre: "'ME'!String1IntAdmisibleCable", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 912. Nombre: "'R bien'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 913. Nombre: "'DI'!String1DUPrctg", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 914. Nombre: "'ME+MI+R sobredim ajustado'!String2DUPrctg", Rango: "#REF!", Hoja: "ME+MI+R sobredim ajustado", Ámbito: Global (en hoja: ME+MI+R sobredim ajustado)

// 915. Nombre: "'ME'!String1DiametroTuboMIN", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 916. Nombre: "'R'!Iccmin", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 917. Nombre: "'Repositorio'!energeticaTariffCompensation", Rango: "T23", Hoja: "Repositorio", Ámbito: Global (en hoja: Repositorio)

// 918. Nombre: "'DI'!String2I2", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 919. Nombre: "'ME+MI+R'!String1NPaneles", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 920. Nombre: "costetotal15", Rango: "G42", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 921. Nombre: "IntAdmisibleIzMI", Rango: "AF3", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 922. Nombre: "'MI'!InvRedSeccDI", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 923. Nombre: "'ME'!String2DUmax", Rango: "#REF!", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 924. Nombre: "'R'!InSobret", Rango: "AP3", Hoja: "R", Ámbito: Global (en hoja: R)

// 925. Nombre: "'ME+MI+R'!String1IbSobredimensionamA", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 926. Nombre: "folder02", Rango: "G8:H8", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 927. Nombre: "fechaImportacion", Rango: "C96", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 928. Nombre: "IbSobredimensionamAR", Rango: "O3", Hoja: "R", Ámbito: Global (en hoja: R)

// 929. Nombre: "'R bien'!SecciónEscogidaMI", Rango: "V3", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

// 930. Nombre: "IntAdmisibleCableDI", Rango: "AK3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 931. Nombre: "SecciónEscogidaDI", Rango: "AE3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 932. Nombre: "FCorrTAmbDI", Rango: "M3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 933. Nombre: "marcaleña", Rango: "D25", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 934. Nombre: "rendimiento15", Rango: "G34", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 935. Nombre: "energia15", Rango: "G35", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 936. Nombre: "'MI'!String1Sobredimensionamiento", Rango: "#REF!", Hoja: "MI", Ámbito: Global (en hoja: MI)

// 937. Nombre: "potenciaTotalDI", Rango: "B3", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 938. Nombre: "firmaIngeniera", Rango: "D24", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 939. Nombre: "rendimientopellet", Rango: "F27", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 940. Nombre: "'DI'!InvRedSeccDI", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 941. Nombre: "'R'!String1IfusibleMínimo", Rango: "#REF!", Hoja: "R", Ámbito: Global (en hoja: R)

// 942. Nombre: "impuesto15", Rango: "G40", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 943. Nombre: "TensiónVME", Rango: "F3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 944. Nombre: "emisiones13", Rango: "E36", Hoja: "Un Equipo", Ámbito: Global (en hoja: Un Equipo)

// 945. Nombre: "'ME+MI+R'!String2Aislamiento", Rango: "#REF!", Hoja: "ME+MI+R", Ámbito: Global (en hoja: ME+MI+R)

// 946. Nombre: "'DI'!String2FCorrAgrupamiento", Rango: "#REF!", Hoja: "DI", Ámbito: Global (en hoja: DI)

// 947. Nombre: "outputStudy", Rango: "H6", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 948. Nombre: "output02Folder", Rango: "H17:H18", Hoja: "Documentación", Ámbito: Global (en hoja: Documentación)

// 949. Nombre: "IME", Rango: "R3", Hoja: "ME", Ámbito: Global (en hoja: ME)

// 950. Nombre: "'R bien'!String1Isc", Rango: "#REF!", Hoja: "R bien", Ámbito: Global (en hoja: R bien)

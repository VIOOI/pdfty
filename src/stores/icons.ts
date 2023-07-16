import { createStore } from "effector";

import jpgToPDF from "../media/icons/iconsTools/jpgToPDF.svg?raw";
import wordToPDF from "../media/icons/iconsTools/wordToPdf.svg?raw";
import powerpointToPDF from "../media/icons/iconsTools/powerPointtoPDF.svg?raw";
import htmlToPDF from "../media/icons/iconsTools/htmlToPDF.svg?raw";
import excelToPDF from "../media/icons/iconsTools/excelToPDF.svg?raw";

import pdfToExcel from "../media/icons/iconsTools/fromExcel.svg?raw";
import pdfToJpg from "../media/icons/iconsTools/fromJPG.svg?raw";
import pdfToWord from "../media/icons/iconsTools/fromWord.svg?raw";
import pdfToPowerPoint from "../media/icons/iconsTools/fromPowerPoint.svg?raw";
import pdfToPDFA from "../media/icons/iconsTools/fromPDFA.svg?raw";

export const $icons = createStore({
	jpg_to_pdf: jpgToPDF,
	powerpoint_to_pdf: wordToPDF,
	excel_to_pdf: powerpointToPDF,
	word_to_pdf: htmlToPDF,
	html_to_pdf: excelToPDF,
	pdf_to_excel: pdfToJpg,
	pdf_to_jpg: pdfToWord,
	pdf_to_word: pdfToPowerPoint,
	pdf_to_powerpoint: pdfToExcel,
	pdf_to_pdfa: pdfToPDFA,
});

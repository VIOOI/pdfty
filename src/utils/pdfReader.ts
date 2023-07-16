/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GlobalWorkerOptions, PDFPageProxy, PDFDocumentProxy, getDocument  } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.worker.min.js";

export const pdfReader = (file: File, id: string) => {
	return readFileAsArrayBuffer(file)
		.then(getPDFDocument)
		.then((pdf) => getPage(pdf, 1))
		.then((page) => renderPageToCanvas(page, id))
		.catch(console.error);
};

const renderPageToCanvas = (page: PDFPageProxy, id: string) => {
	const scale = 0.5;
	const viewport = page.getViewport({ scale });
	const canvas = document.getElementById(`page_${id}`) as HTMLCanvasElement;
	const context = canvas.getContext("2d");

	canvas.height = viewport.height;
	canvas.width = viewport.width;

	return page.render({
		canvasContext: context!,
		viewport,
	}).promise;
};

const readFileAsArrayBuffer = (file: File): Promise<Uint8Array> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (ev) =>
			resolve(new Uint8Array(ev!.target!.result as ArrayBuffer));
		reader.onerror = reject;
		reader.readAsArrayBuffer(file);
	});

const getPDFDocument = (data: Uint8Array): Promise<PDFDocumentProxy> =>
	getDocument(data).promise;

const getPage = (pdf: PDFDocumentProxy, num: number): Promise<any> =>
	pdf.getPage(num);

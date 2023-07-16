/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getApiFile } from "@utils/ky";
import { readFromStream } from "@utils/readableStream";
import { deserializeUint8Array, serializeUint8Array } from "@utils/uint8arrayUtils";
import JSZip from "jszip";
import { nanoid } from "nanoid";
import { Accessor, Setter } from "solid-js";
import { SetStoreFunction } from "solid-js/store";

import { Files } from ".";

const tools: Record<string, { file: string }> = {
	word: { file: ".docx, .doc, .odf" },
	jpg: { file: ".jpeg, .jpg, .png" },
	excel: { file: ".xlsx, .xls" },
	powerpoint: { file: ".ppt, .pptx" },
	html: { file: ".html, .htm" },
};
export interface HandleClickArgs {
	setFiles: SetStoreFunction<{ value: Array<Files> }>
	files: { value: Array<Files> }
	name: string
}

export const createInputElement = (name: string): HTMLInputElement => {
	const btn = document.createElement("input") as HTMLInputElement;
	btn.setAttribute("type", "file");
	btn.setAttribute("accept", tools[name]?.file || "*/*");
  
	return btn;
};

export const handleClick = ({
	setFiles,
	files,
	name,
}: HandleClickArgs) => {
	const btn = createInputElement(name);

	btn.onchange = async (event: Event) => {
		const file = (event.target as HTMLInputElement)?.files?.[0];

		if (file) {
			setFiles("value", [ ...files.value, {
				id: nanoid(),
				name: file.name,
				size: file.size, 
				pages: 0,
				file,
			} ]);
		}
	};

	btn.click();
};

export interface MergeHandleArgs {
  setIsReadStream: Setter<boolean>
  setProcess: Setter<number>
  name: string
  files: { value: Array<Files> }
  setConvertFile: SetStoreFunction<{ value: Array<string> }>
  convertFile: { value: Array<string> } 
}

export const mergeHandle = async ({
	setIsReadStream,
	setProcess,
	name,
	files,
	setConvertFile,
	convertFile,
}: MergeHandleArgs) => {
	setIsReadStream(true);

	const promises = files.value.map(n => 
		getApiFile(n, `${name}_to_pdf`)
			.then(res => {
				const onProgress = (total: number) => (read: number) => { 
					setProcess(read * (total / 100));
				};
				return readFromStream(res.body!, onProgress(Number(res.headers.get("Content-Length")) || 0));
			})
			.then(stream => { 
				return serializeUint8Array(stream);
			}),
	);

	const results = await Promise.all(promises);

	setConvertFile("value", [ ...convertFile.value, ...results ]);
	setIsReadStream(false);
};

type FileEntry = { value: Array<string> };
type Format = string;

type DownloadFileParams = {
    files: FileEntry;
    format: Format;
};

const generateZipFile = async (files: FileEntry, format: Format): Promise<JSZip> => {
	const zip = new JSZip();
	const folder = zip.folder("files");

	files.value.forEach((file, index) => {
		const nfile = deserializeUint8Array(file);
		folder.file(`file${index}.${format}`, nfile, { binary: true });
	});

	return zip;
};

const downloadFileBlob = (blobContent: Blob, fileName: string): void => {
	const link = document.createElement("a");
	link.href = window.URL.createObjectURL(blobContent);
	link.download = fileName;
	link.click();
};

export const downloadFile = async ({ files, format }: DownloadFileParams): Promise<void> => {
	const zip = await generateZipFile(files, format);

	zip.generateAsync({ type: "blob" })
		.then((content) => downloadFileBlob(content, "pdfty.zip"));
};

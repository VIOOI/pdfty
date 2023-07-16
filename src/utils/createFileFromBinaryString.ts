
function createFileFromBinaryString(binaryString: string, filename: string): File {
	const bytes = new Uint8Array(binaryString.split("").map(binChar => parseInt(binChar, 2)));
	const blob = new Blob([ bytes.buffer ]);
	const file = new File([ blob ], filename);
	return file;
}

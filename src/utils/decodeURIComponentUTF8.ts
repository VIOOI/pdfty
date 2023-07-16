function decodeURIComponentUTF8(encodedText: string): string {
	const decodedText = decodeURIComponent(encodedText);
	const byteSequence = [];
	let charCode;
	let charIndex = 0;

	while (charIndex < decodedText.length) {
		charCode = decodedText.charCodeAt(charIndex++);

		if (charCode < 128) {
			byteSequence.push(charCode);
		} else if (charCode > 191 && charCode < 224) {
			const charCode2 = decodedText.charCodeAt(charIndex++);
			byteSequence.push(((charCode & 31) << 6) | (charCode2 & 63));
		} else {
			const charCode2 = decodedText.charCodeAt(charIndex++);
			const charCode3 = decodedText.charCodeAt(charIndex++);
			byteSequence.push(((charCode & 15) << 12) | ((charCode2 & 63) << 6) | (charCode3 & 63));
		}
	}

	return String.fromCharCode(...byteSequence);
}


export function extractFilenameFromContentDisposition(contentDisposition: string): string {
	const filenameStarRegex = /filename\*=(.*?)['"]/;
	const match = contentDisposition.match(filenameStarRegex);
	if (match) {
		const filenameStar = match[1];
		const decodedFilename = decodeURIComponent(filenameStar);
		return decodedFilename;
	}
	return "";
}

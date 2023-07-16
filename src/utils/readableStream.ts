/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
export async function readFromStream(
	stream: ReadableStream<Uint8Array>,
	onProgress: (readBytes: number) => void,
): Promise<Uint8Array> {
	const reader = stream.getReader();
	const chunks: Uint8Array[] = [];
	let readBytes = 0;

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		if (value) { 
			chunks.push(value);
			readBytes += value.length;
			onProgress(readBytes);
		}
	}

	return ConcatenateUint8Array(chunks);
}

function ConcatenateUint8Array(chunks: Uint8Array[]): Uint8Array {
	const totalLength = chunks.reduce((total, arr) => total + arr.length, 0);
	const result = new Uint8Array(totalLength);
	let offset = 0;

	for(const arr of chunks) {
		result.set(arr, offset);
		offset += arr.length;
	}

	return result;
}

// Сериализация
export const serializeUint8Array = (input: Uint8Array): string => {
	let binary = "";
	const len = input.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(input[i]);
	}
	return window.btoa(binary);
};

// Десериализация
export const deserializeUint8Array = (input: string): Uint8Array => {
	const binary = window.atob(input);
	const len = binary.length;
	const output = new Uint8Array(len);
	for (let i = 0; i < len; i++) {
		output[i] = binary.charCodeAt(i);
	}
	return output;
};

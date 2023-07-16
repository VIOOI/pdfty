// Сериализация
export async function serializeFile(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onloadend = () => resolve(reader.result as string);
		reader.onerror = reject;

		reader.readAsDataURL(file);
	});
}

// Десериализация
export async function deserializeFile(data: string, fileName: string): Promise<File> {
	const response = await fetch(data);
	const blob = await response.blob();
	return new File([ blob ], fileName, { type: blob.type });
}

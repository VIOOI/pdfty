export function getFirstFileType(s: string): string | null {
	const result = s.split(",")[0].trim();
	return result.startsWith(".") ? result.slice(1) : null;
}

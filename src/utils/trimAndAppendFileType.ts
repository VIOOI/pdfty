export function trimAndAppendFileType(str: string): string {
	const fileType = str.split(".").pop();
	return str.length > 20 ? `${str.substring(0, 17)}...${fileType}` : str;
}

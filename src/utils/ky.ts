import { Files } from "@pages/convert_to";
import ky from "ky";

import { transformString } from "./transformString";

export const api = ky.create({
	prefixUrl: "http://89.223.120.149:8000/api",
});

export const getApiFile = async (body: Files, type: string) => {
	const form = new FormData();
	form.append("file", body.file, body.file.name);
	// form.append("param", "[]");
	return api.post(`action/${transformString(type)}`, {
		body: form,
	});
};


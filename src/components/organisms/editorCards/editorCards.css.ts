import { css } from "@app/globalStyle";

export const sEditorCards = css({
	width: "calc(100vw - 323px)",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "start",
	alignItems: "start",
	padding: "85px",
	boxSizing: "border-box",
	fontFamily: "Gilroy",
	gap: "20px",
	"& .icon": {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"& svg": {
			width: "4.75rem",
			height: "4.75rem",
		},
	},
});

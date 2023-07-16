import { css } from "@app/globalStyle";

export const sMenu = css({
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	columnGap: "2rem",
	width: "100%",
	height: "100%",
	fontFamily: "Gilroy",
	fontSize: "0.875rem",
	textTransform: "uppercase",
	"& a": {
		color: "black",
		textDecoration: "none",
	},
});

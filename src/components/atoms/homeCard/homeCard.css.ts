import { css } from "@app/globalStyle";

export const cardStyle = css({
	display: "block",
	width: "238px",
	height: "218px",
	color: "$primary",
	fontFamily: "Gilroy",
	textDecoration: "none",
	padding: "1.62rem",
	border: "1px solid #E7E7ED",
	borderRadius: "1rem",
	background: "$white",
	"& > a": {
		textDecoration: "none",
		color: "black",
		"& > div svg": {
			width: "56px",
			height: "56px",
		},
		"& svg": {
			width: "2.75rem",
			height: "2.75rem",
		},
		"& h2": {
			fontSize: "18px",
			fontWeight: 600,
		},
		"& p": {
			fontSize: "0.875rem",
			fontWeight: 400,
			color: "#878D9E",
			lineHeight: "130%",
		},
	},
});

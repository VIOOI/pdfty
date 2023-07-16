import { css } from "@app/globalStyle";

export const sRightMenu = css({
	width: "303px",
	height: "90vh",
	background: "white",
	boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)",
	borderRadius: "20px",
	position: "fixed",
	top: "85px",
	right: "20px",
	"&.closed": {
		right: "-303px",
	},
	"& .buttons": {
		width: "46px",
		display: "flex",
		flexDirection: "column",
		rowGap: "14px",
		position: "absolute",
		top: "2rem",
		left: "calc(-46px + -14px)",
		"& div": {
			width: "46px",
			height: "46px",
			boxShadow: "0px 4px 24px 0px rgba(129, 140, 180, 0.25)",
			border: "white",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: "100%",
		},
		"& div.close": {
			background: "white",
		},
	},
});

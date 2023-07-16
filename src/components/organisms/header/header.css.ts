import { css } from "@app/globalStyle";

export const header = css({
	width: "100vw",
	height: "4.0625rem",
	boxSizing: "border-box",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	columnGap: "4.2rem",
	background: "white",
	boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)",
	position: "fixed",
	top: 0,
	paddingLeft: "5.32rem",
	paddingRight: "5.32rem",
	zIndex: "1000000",

	"& .loging": {
		display: "flex",
		columnGap: "0.37rem",
	},
});

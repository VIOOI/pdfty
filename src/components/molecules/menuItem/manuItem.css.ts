import { css } from "@app/globalStyle";

export const sMenuItem = css({
	display: "flex",
	height: "65px",
	justifyContent: "center",
	alignItems: "center",
	columnGap: ".63rem",
	fontSize: "0.875rem",
	fontFamily: "Gilroy",
	fontWeight: 600,
	position: "relative",
	cursor: "pointer",
	"& .submenu": {
		background: "white",
		padding: "1.25rem",
		boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)",
		display: "flex",
		position: "absolute",
		top: "65px",
		columnGap: "1rem",
		borderRadius: "0rem 0rem 0.25rem 0.25rem",
		"&.full": {
			width: "100vw",
			position: "fixed",
			left: "0px",
		},
	},
});

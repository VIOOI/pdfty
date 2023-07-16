import { css } from "@app/globalStyle";

export const sOptions = css({
	padding: "20px",
	"& main": {
		height: "80vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		"& .info": {
			borderRadius: "16px",
			background: "#F8F8F8",
			padding: "20px",
			fontSize: "14px",
			color: "#878D9E",
			lineHeight: "150%",
		},
		"& .handle_buttons": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "10px",
			borderRadius: "16px",
			background: "#F8F8F8",
			padding: "20px",
			fontSize: "18px",
			fontWeight: 700,
			color: "#878D9E",
			stroke: "rgba(135, 141, 158, 1)",
			"&.active": {
				color: "white",
				stroke: "white",
				background: "#FF5F38",
			},
			"& > div": {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			},
		},
	},
});

export const sMain = css({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
});

export const sAddButton = css({
	background: "rgba(255, 95, 56, 1)",
	color: "white",
});

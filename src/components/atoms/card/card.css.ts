import { css } from "@app/globalStyle";

export const sCard = css({
	boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)",
	width: "20.25rem",
	height: "16rem",
	borderRadius: "1.25rem",
	background: "white",
	padding: ".75rem",
	
	".header": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		
		"h3": {
			fontSize: "16px",
		},
		
		".headerDiv": {
			display: "flex",
			gap: "1.25rem",
		},
	},
	
	".svg": {
		width: "4.75rem",
		height: "4.75rem",
	},
	
	".image": {
		borderRadius: "0.75rem",
		marginBottom: "0.75rem",
		objectFit: "cover",
		display: "flex",
		justifyContent: "center",
		alignItems: "start",
		overflow: "hidden",
		height: "165px",
	},
	
	".options": {
		fontSize: "14px",
		fontWeight: 400,
		color: "#878D9E",
	},
});

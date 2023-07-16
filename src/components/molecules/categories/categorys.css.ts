import { css } from "@app/globalStyle";

export const sCategory = css({
	width: "11rem",
	minHeight: "10.9375rem",
  
	"& h3": {
		margin: 0,
		color: "#878D9E",
		fontWeight: 600,
		fontSize: "0.875rem",
	},
  
	"& a": {
		textDecoration: "none",
		color: "#070707",
	},
  
	"& ul": {
		listStyleType: "none",
		display: "flex",
		flexDirection: "column",
		rowGap: "0.8rem",
		padding: 0,
		fontSize: "0.875rem",
		fontWeight: 500,
    
		"& li": {
			display: "flex",
			alignItems: "center",
			columnGap: "0.5rem",
		},
	},
});

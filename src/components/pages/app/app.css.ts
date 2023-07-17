import { css } from "@app/globalStyle";

export const homePageStyles = css({
	display: "flex",
	minHeight: "calc(100vh - 65px)",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	paddingTop: "12.5rem",
	backgroundSize: "100vw",
	backgroundPositionY: "-10vh",
	backgroundRepeat: "no-repeat",
  
	"& > h1": {
		fontFamily: "Gilroy",
		fontSize: "2.5rem",
		fontWeight: 700,
		width: "52%",
		textAlign: "center",
	},

	"& > p": {
		fontFamily: "Gilroy",
		fontSize: "1.125rem",
		fontWeight: 400,
		color: "rgba(135, 141, 158, 1)",
		width: "44%",
		textAlign: "center",
	},

	"& > div": {
		display: "grid",
		gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
		gap: "1.25rem",
		marginBottom: "7.5rem",
		paddingLeft: "1rem",
		paddingRight: "1rem",
	},
});

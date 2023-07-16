import { css } from "@app/globalStyle";

export const sLoadingPage = css({
	width: "100vw",
	height: "100vh",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	flexDirection: "column",
	paddingTop: "12.5rem",
	background: "linear-gradient(25deg, #CBFAFF 10%, rgba(203, 250, 255, 0) 50%)",
	fontFamily: "Gilroy",
	boxSizing: "border-box",
	"& h1": {
		fontSize: "2.5rem",
		margin: 0,
	},
	"& p": {
		fontSize: "1.125rem",
		marginTop: "1rem",
		marginBottom: "2.5rem",
	},
	"& div": {
		padding: "10px 44px",
		fontSize: "18px",
	},
	"& .drop": {
		fontWeight: 500,
		fontSize: "16px",
		marginTop: "33px",
	},
});

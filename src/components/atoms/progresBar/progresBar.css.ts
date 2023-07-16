import { css } from "@app/globalStyle";

export const sProgresBar = css({
	$$offset: "0",
	$$dasharray: "0 0",
	width: "250px",
	height: "250px",
	borderRadius: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"& circle": {
		transformOrigin: "center",
		transform: "rotate(-180deg)",
		transition: "stroke-dashoffset 0.3",
		strokeDashoffset: "$$offset",
		strokeDasharray: "$$dasharray $$dasharray",
	},

});

// export const sProgresBarCircle = style({
// 	transformOrigin: "center",
// 	transform: "rotate(-180deg)",
// 	transition: "stroke-dashoffset 0.3",
// });

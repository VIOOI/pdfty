import { css } from "@app/globalStyle";

export const sButton = css({
	$color: "rgba(255, 95, 56, 1)",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	columnGap: ".63rem",
	fontSize: "0.875rem",
	fontWeight: 600,
	fontFamily: "Gilroy",
	minWidth: "7.25rem",
	height: "2.75rem",
	textDecoration: "none",
	cursor: "pointer",
	variants: {
		type: {
			primary: {
				background: "rgba(255, 95, 56, 1)",
				color: "white",
			},
			light: {
				background: "rgba(248, 248, 248, 1)",
				color: "rgba(30, 30, 30, 1)",
			},
		},
		outlined: {
			true: {
				border: "1px solid rgba(248, 248, 248, 1)",
				background: "transparent",
				color: "rgba(248, 248, 248, 1)",
			},
		},
		rounded: {
			md: { borderRadius: "0.75rem" },
			lg: { borderRadius: "2rem" },
			full: { borderRadius: "100rem" },
		},
	},
	compoundVariants: [
		{
			type: "primary",
			outlined: "true",
			css: {
				border: "1px solid rgba(248, 248, 248, 1)",
				background: "transparent",
				color: "rgba(248, 248, 248, 1)",
			},
		},
		{
			type: "light",
			outlined: "true",
			css: {
				border: "1px solid rgba(255, 95, 56, 1)",
				background: "transparent",
				color: "rgba(255, 95, 56, 1)",
			},
		},
	],
});

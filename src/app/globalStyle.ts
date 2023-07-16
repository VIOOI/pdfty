import { createStitches, globalCss } from "@stitches/core";

export const globalStyle = globalCss({
	"body": {
		margin: 0,
		padding: 0,
	},
});

export const { css } = createStitches({
	theme: {
		colors: {
			primary: "#FF5F38",
			white: "#FFFFFF",
			light: "#F8F8F8",
			blue: "#878D9E",
			dark: "#878D9E",
		},
		fonts: {
			primary: "Gilroy",
		},
		radii: {
			sm: "0.75rem",
			md: "1rem",
			lg: "1.25rem",
			full: "9999999px",
		},
	},
	media: {
		bp1: "(min-width: 640px)",
		bp2: "(min-width: 768px)",
		bp3: "(min-width: 1024px)",
	},
});


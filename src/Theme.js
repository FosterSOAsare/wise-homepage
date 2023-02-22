import { createTheme } from "@mui/material";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			ss: 465,
			sm: 768,
			md: 1000,
			lg: 1200,
			xl: 1536,
			custom: 1920,
		},
	},
});

export default theme;

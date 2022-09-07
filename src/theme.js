import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#F2870D",
			contrastText: "#fff",
		},
		secondary: {
			main: "#DC9579",
			contrastText: "#fff",
		},
	},
});

export const DarkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});


export default Theme;

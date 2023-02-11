import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trade from "./components/Trade/Trade";
import GetPaid from "./components/GetPaid/GetPaid";

function App() {
	return (
		<Box sx={{ minHeight: "100vh", paddingBottom: "50vh" }}>
			<Header />
			<Hero />
			<Trade />
			<GetPaid />
		</Box>
	);
}

export default App;

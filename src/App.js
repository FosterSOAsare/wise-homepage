import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trade from "./components/Trade/Trade";
import GetPaid from "./components/GetPaid/GetPaid";
import Collaboration from "./components/Collaboration/Collaboration";
import Pros from "./components/Pros/Pros";
import Features from "./components/Features/Features";

function App() {
	return (
		<Box sx={{ minHeight: "100vh", paddingBottom: "50vh" }}>
			<Header />
			<Hero />
			<Trade />
			<GetPaid />
			<Collaboration />
			<Pros />
			<Features />
		</Box>
	);
}

export default App;

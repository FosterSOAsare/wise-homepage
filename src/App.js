import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trade from "./components/Trade/Trade";

function App() {
	return (
		<Box sx={{ minHeight: "100vh", paddingBottom: "50vh" }}>
			<Header />
			<Hero />
			<Trade />
		</Box>
	);
}

export default App;

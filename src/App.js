import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
	return (
		<Box sx={{ height: "100vh" }}>
			<Header />
			<Hero />
		</Box>
	);
}

export default App;

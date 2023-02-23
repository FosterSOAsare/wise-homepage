import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trade from "./components/Trade/Trade";
import GetPaid from "./components/GetPaid/GetPaid";
import Collaboration from "./components/Collaboration/Collaboration";
import Pros from "./components/Pros/Pros";
import Features from "./components/Features/Features";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import PhoneMenu from "./components/Header/PhoneMenu/PhoneMenu";

function App() {
	const [showMenu, setShowMenu] = useState(null);
	return (
		<Box sx={{ minHeight: "100vh" }}>
			<Header setShowMenu={setShowMenu} />
			<Hero />
			<Trade />
			<GetPaid />
			<Collaboration />
			<Pros />
			<Features />
			<Faqs />
			<Footer />
			<PhoneMenu setShowMenu={setShowMenu} showMenu={showMenu} />
		</Box>
	);
}

export default App;

import React, { useEffect, useState } from "react";
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

import { initializeApp } from "firebase/app";

function App() {
	useEffect(() => {
		const firebaseConfig = {
			apiKey: "AIzaSyARNM0B31n13s5dkayNViAJ4CPBqxYBIN8",
			authDomain: "wise-ef84b.firebaseapp.com",
			projectId: "wise-ef84b",
			storageBucket: "wise-ef84b.appspot.com",
			messagingSenderId: "1067977126262",
			appId: "1:1067977126262:web:f7ef2c2a99486274890a57",
		};

		// Initialize Firebase
		initializeApp(firebaseConfig);
	}, []);
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

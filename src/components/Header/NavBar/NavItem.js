import React, { useState, useEffect, useRef } from "react";
import style from "../../../App.style";
import Popup from "./Popup";
import { Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavItem = ({ name, image, links, desc, active }) => {
	const [showPopup, setShowPopup] = useState(active || false);
	useEffect(() => {
		let parent = buttonRef.current;
		function displayPopup(e) {
			if (parent.contains(e.target)) {
				setShowPopup(true);
			} else {
				setShowPopup(false);
			}
		}
		document.addEventListener("mousemove", displayPopup);
	}, []);

	let buttonRef = useRef(null);
	return (
		<Box ref={buttonRef} sx={{ marginRight: "10px", position: "relative" }}>
			<Button endIcon={<KeyboardArrowDownIcon />} sx={{ ...style.button, color: "white" }}>
				{name}
			</Button>
			{showPopup && <Popup {...{ image, links, desc, name }} />}
		</Box>
	);
};

export default NavItem;

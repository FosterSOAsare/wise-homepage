import React from "react";
import style from "../../../App.style";
import navData from "./NavbarData";
import { Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const NavBar = () => {
	return (
		<Box sx={{ width: "auto" }}>
			{navData.map((e, index) => {
				return (
					<Button key={index} sx={{ ...style.button, marginRight: "10px", color: "white", position: "relative" }} endIcon={<KeyboardArrowDownIcon />}>
						{e.name}
						{e.element}
					</Button>
				);
			})}
		</Box>
	);
};
// {

export default NavBar;

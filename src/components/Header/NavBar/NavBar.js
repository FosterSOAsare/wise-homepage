import React from "react";
import navData from "./NavbarData";
import { Box } from "@mui/material";

import NavItem from "./NavItem";
const NavBar = () => {
	return (
		<Box sx={{ width: "auto", display: "flex", alignItems: "center" }}>
			{navData.map((e, index) => {
				return <NavItem key={index} {...e} />;
			})}
		</Box>
	);
};
// {

export default NavBar;

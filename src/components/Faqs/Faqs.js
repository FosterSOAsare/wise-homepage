import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DarkNavy from "../../assets/images/dark-navy.png";
import CustomAccordion from "./CustomAccordion";
import accordionData from "./data";
const Faqs = () => {
	return (
		<Box sx={{ height: "auto", minHeight: "500px", backgroundImage: `url(${DarkNavy})`, paddingBlock: "100px" }}>
			<Container maxWidth="md">
				<Typography variant="h3" sx={{ color: "white", margin: "0 auto", textAlign: "center", fontWeight: "bold", fontSize: "26px", marginBottom: "20px" }}>
					FAQS
				</Typography>
				{accordionData.map((e, index) => (
					<CustomAccordion key={index} {...e} />
				))}
			</Container>
		</Box>
	);
};

export default Faqs;

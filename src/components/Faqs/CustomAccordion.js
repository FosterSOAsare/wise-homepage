import React from "react";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomAccordion(props) {
	let { question, answer } = props;
	return (
		<Accordion sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#00A1DB" }} />} aria-controls="panel1a-content" id="panel1a-header">
				<Typography sx={{ color: "white", fontWeight: "bold" }}>{question}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ color: "white" }}>{answer}</AccordionDetails>
		</Accordion>
	);
}

export default CustomAccordion;

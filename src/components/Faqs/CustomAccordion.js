import React from "react";
import { Typography, AccordionSummary, AccordionDetails } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	"&:before": {
		display: "none",
	},
}));

function CustomAccordion(props) {
	let { question, answer } = props;
	return (
		<Accordion sx={{ backgroundColor: "transparent", border: "none", outline: "transparent", boxShadow: "none", borderBottom: "20px" }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#00A1DB" }} />} aria-controls="panel1a-content" id="panel1a-header" sx={{ paddingInline: "10px" }}>
				<Typography sx={{ color: "white", fontWeight: "bold" }}>{question}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ color: "white", borderBottom: "1px solid grey", paddingBottom: "40px", paddingInline: "10px" }}>{answer}</AccordionDetails>
		</Accordion>
	);
}

export default CustomAccordion;

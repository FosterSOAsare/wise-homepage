import React from "react";
import { Typography, AccordionSummary, AccordionDetails } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "../../../App.style";
const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	"&:before": {
		display: "none",
	},
}));

function MenuAccordion({ name, links }) {
	return (
		<Accordion sx={style.phoneMenu__accordion}>
			<AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#00A1DB" }} />} aria-controls="panel1a-content" id="panel1a-header" sx={{ paddingInline: "10px" }}>
				<Typography sx={{ color: "white", fontWeight: "bold" }}>{name}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ color: "white", paddingInline: "10px", width: "95%", marginLeft: "5%", marginBlock: "5px" }}>
				{links.map((e, index) => (
					<a key={index} href={e.link} className="phoneMenu__link" target="_blank" rel="noreferrer">
						{e.name}
					</a>
				))}
			</AccordionDetails>
		</Accordion>
	);
}

export default MenuAccordion;

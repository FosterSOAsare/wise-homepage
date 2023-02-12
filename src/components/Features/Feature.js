import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
let iconStyle = {
	color: "#2FAAD1",
	margin: "0 auto",
	display: "block",
	marginBottom: "20px",
	fontSize: "20px",
};

const Feature = ({ heading, desc, available = true }) => {
	return (
		<Grid
			item
			xs={3.7}
			sx={{
				height: "250px",
				backgroundColor: available ? "white" : "#F3F6F8",
				opacity: available ? "1" : "0.4",
				boxShadow: "2px 2px 3px 0px #ECECEC , -2px -2px 3px 0px #ECECEC ",
				width: "100%",
				borderRadius: "5px",
				padding: "30px 10px",
			}}>
			{available ? <CheckIcon sx={{ ...iconStyle }} /> : <ClearIcon sx={{ ...iconStyle }} />}
			<Typography variant="h3" sx={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
				{heading}
			</Typography>
			<Typography variant="p" sx={{ textAlign: "center", lineHeight: "25px", display: "block", color: "#5d7079" }}>
				{desc}
			</Typography>
		</Grid>
	);
};

export default Feature;

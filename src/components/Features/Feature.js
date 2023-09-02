import React from "react";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import style from "../../App.style";
let iconStyle = {
	color: "#2FAAD1",
	margin: "0 auto",
	display: "block",
	marginBottom: "20px",
	fontSize: "20px",
};

const Feature = ({ heading, desc, available = true, sx }) => {
	return (
		<Grid item sm={5.7} md={3.7} xs={12} sx={{ ...style.feature, backgroundColor: available ? "white" : "#F3F6F8", opacity: available ? "1" : "0.4", ...sx }}>
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

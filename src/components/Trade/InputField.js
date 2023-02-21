import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const CssTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		width: "100%",
		color: "#526990",
		fontSize: "22px",
		padding: "0px",
		marginLeft: "-8px",
		letterSpacing: "1px",
		"& fieldset": {
			borderColor: "transparent",
		},
		"&.Mui-focused fieldset": {
			borderColor: "transparent",
		},
		"&:hover fieldset": {
			borderColor: "transparent",
		},
	},
});

const InputField = ({ value, handleInput, text, type }) => {
	const [focus, setFocus] = useState(false);
	return (
		<Box sx={{ width: "100%", height: "80px" }}>
			<Grid container sx={{ width: "100%", height: "100%", borderRadius: "5px", overflow: "hidden", border: `1px solid #${!focus ? "c9cbce" : "1565C0"}` }}>
				<Grid item sm={9} sx={{ height: "100%", padding: "6px 10px", border: "none" }}>
					<Typography variant="p" sx={{ fontSize: "14px", marginBottom: "3px", display: "block", opacity: "0.7" }}>
						{text}
					</Typography>
					<CssTextField
						id="custom-css-outlined-input"
						size="small"
						sx={{
							width: "100%",
							fontSize: "50px",
							border: "none",
							"&:focus": {
								border: "none",
							},
						}}
						value={value[type].toString().substring(0)}
						type="number"
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						onChange={(e) => {
							handleInput(e.target.value, type);
						}}
					/>
				</Grid>
				<Grid item sm={3} sx={{ height: "100%", background: "#2E4369", justifyContent: "center", alignItems: "center", display: "flex", width: "100%", color: "white" }}>
					<Typography variant="h3" sx={{ fontSize: "20px" }}>
						EUR
					</Typography>
					<ExpandMoreIcon sx={{ color: "#1565C0" }} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default InputField;

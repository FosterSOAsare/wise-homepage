import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import InputField from "./InputField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import style from "../../App.style";

const Trade = () => {
	const [value, setValue] = useState({ send: 0, receive: 0 });
	const rate = 4.5;

	//  Check to see if the value's last character is '.' ,
	//  if it is  '.' , check to see if there is a previous fullstop character
	// 	if no , add '.' to the end of the parsedValue else return the parsedValue
	// Else return parsedValue
	function checkFullStops(value, parsedValue) {
		return value.endsWith(".") ? (parsedValue.toString().includes(".") ? parsedValue : `${parsedValue}.`) : parsedValue;
	}
	function handleInput(value, type) {
		if (!/^[0-9.]+$/.test(value)) {
			// Strip last character if the last character is not a number
			value = value.substr(0, value.length - 1);
		}
		// Parse float the value and use it for calculations
		let parsedValue = parseFloat(value);

		// Prevent seeing NaN after conversion if value is empty string''
		if (!parsedValue || parsedValue === 0) {
			setValue({ send: 0, receive: 0 });
			return;
		}

		// Do claculations with the rate and after that and set the values
		// Also check to make sure that none of the fields receives a value less than 0
		setValue({
			send: type === "send" ? checkFullStops(value, parsedValue) : parsedValue + rate,
			receive: type === "receive" ? checkFullStops(value, parsedValue) : parsedValue - rate > 0 ? parsedValue - rate : 0,
		});
	}
	return (
		<Box sx={style.trade}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Grid container sx={style.trade__grid__container}>
					<Grid item sm={5.5} xs={12} sx={style.exchange__area}>
						<InputField value={value} handleInput={handleInput} type="send" text="You send exactly" />
						<Box sx={style.fees}>
							<Box sx={style.dashed__circle}>
								<HorizontalRuleIcon size="small" sx={{ color: "black", fontSize: "12px" }} />
							</Box>
							<Typography variant="p" sx={{ fontWeight: "bold", color: "#37517e" }}>
								4.45 EUR
							</Typography>
							<Button variant="outlined" endIcon={<ExpandMoreIcon sx={{ color: "#1565C0" }} />} sx={style.fee__type}>
								Fast transfer fee
							</Button>
						</Box>
						<InputField value={value} handleInput={handleInput} type="receive" text="Receiver gets" />
					</Grid>
					<Grid item sm={6} xs={12}>
						<Typography variant="h3" sx={{ fontSize: "26px", fontWeight: "bold", marginBottom: "10px", color: "#2E4369" }}>
							Pay people in one click. For 19x less.
						</Typography>
						<Typography variant="p" sx={{ width: "90%", lineHeight: "25px", opacity: "0.7", fontWeight: "500" }}>
							Effortlessly pay international invoices, vendors, and employees — with the real exchange rate, in 80 countries. 6x cheaper than old-school banks, and 19x cheaper than
							Paypal.
						</Typography>

						<a href="https://wise.com/register?profileType=BUSINESS" target="_blank" rel="noreferrer">
							<Button
								variant="outlined"
								sx={{
									display: "block",
									marginTop: "30px",
									height: "45px",
									width: "150px",
									borderRadius: "5px",
									fontWeight: "bold",
									border: "2px solid #008FC9",
									textTransform: "none",
									fontSize: "16px",
									"&:hover": {
										backgroundColor: "#008FC9",
										color: "white",
									},
								}}>
								Get started
							</Button>
						</a>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Trade;

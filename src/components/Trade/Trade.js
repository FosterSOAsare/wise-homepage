import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import InputField from "./InputField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import style from "../../App.style";

const Trade = () => {
	const [value, setValue] = useState({ send: 0, receive: -4.5 });
	function handleInput(value, type) {
		if (value) {
			// For when there is a dot
			setValue(() => {
				if (value) {
					return { [type === "send" ? "receive" : "send"]: type === "send" ? parseFloat(value) - 4.5 : parseFloat(value) + 4.5, [type]: parseFloat(value) };
				}
			});
			return;
		}
		setValue(type === "send" ? { send: 0, receive: -4.5 } : { send: 4.5, receive: 0 });
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

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import InputField from "./InputField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

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
		<Box sx={{ width: "100%", height: "470px" }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Grid container sx={{ height: "100%", alignItems: "center", justifyContent: "space-between" }}>
					<Grid item md={5} sx={{ height: "auto", background: "white" }}>
						<InputField value={value} handleInput={handleInput} type="send" text="You send exactly" />
						<Box
							sx={{
								width: "80%",
								height: "70px",
								borderLeft: "1px solid #c9cbce",
								padding: "0 20px",
								marginInline: "auto",
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-start",
								gap: "20px",
								position: "relative",
							}}>
							<Box
								sx={{
									height: "20px",
									width: "20px",
									background: "#c9cbce",
									position: "absolute",
									left: "-10px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "50%",
								}}>
								<HorizontalRuleIcon size="small" sx={{ color: "black", fontSize: "12px" }} />
							</Box>
							<Typography variant="p" sx={{ fontWeight: "bold", color: "#37517e" }}>
								4.45 EUR
							</Typography>
							<Button
								variant="outlined"
								endIcon={<ExpandMoreIcon sx={{ color: "#1565C0" }} />}
								sx={{ textTransform: "none", color: "#37517e", borderColor: "#c9cbce", fontSize: "14px", height: "30px" }}>
								Fast transfer fee
							</Button>
						</Box>
						<InputField value={value} handleInput={handleInput} type="receive" text="Receiver gets" />
					</Grid>
					<Grid item md={6}>
						<Typography variant="h3" sx={{ fontSize: "26px", fontWeight: "bold", marginBottom: "10px", color: "#2E4369" }}>
							Pay people in one click. For 19x less.
						</Typography>
						<Typography variant="p" sx={{ width: "90%", lineHeight: "25px", opacity: "0.7", fontWeight: "500" }}>
							Effortlessly pay international invoices, vendors, and employees — with the real exchange rate, in 80 countries. 6x cheaper than old-school banks, and 19x cheaper than
							Paypal.
						</Typography>

						<a href="https://wise.com/register?profileType=BUSINESS" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
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

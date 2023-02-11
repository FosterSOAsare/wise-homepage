import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import GetPaidImage from "../../assets/images/get-paid.png";
import { ReactComponent as Invoices } from "../../assets/images/invoices.svg";
import { ReactComponent as CollectMoneySeamlessly } from "../../assets/images/collect-money.svg";

const GetPaid = () => {
	return (
		<Box sx={{ height: "700px", backgroundColor: "#F2F5F7" }}>
			<Container maxWidth="lg" sx={{ padding: "100px 0" }}>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="h2" sx={{ fontSize: "26px", fontWeight: "bold", color: "#37517E" }}>
							Get paid faster.
						</Typography>

						<Typography variant="p" sx={{ color: "#5d7079", marginTop: "20px", display: "block", lineHeight: "25px", width: "75%" }}>
							With Wise Business, you can get local bank details for 10 different currencies. Give them to your customers for an easy, free way to get paid. 50% of payments are instant
							or arrive in an hour.
						</Typography>
						<Button
							variant="contained"
							sx={{ background: "#008FC9", marginTop: "20px", height: "45px", borderRadius: "2px", paddingInline: "28px", textTransform: "none", fontWeight: "bold" }}>
							Get started for free
						</Button>

						<Box sx={{ marginTop: "25px", display: "flex", width: "80%", gap: "10px", justifyContent: "space-between" }}>
							<Box sx={{ width: "48%" }}>
								<CollectMoneySeamlessly />
								<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
									Collect money seamlessly
								</Typography>
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									Easily withdraw from Amazon, Stripe, and more in up to 10 currencies.
								</Typography>
							</Box>
							<Box sx={{ width: "48%" }}>
								<Invoices />
								<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
									Create clever invoices
								</Typography>
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									Add your local bank details to {""}
									<Typography variant="span" sx={{ display: "inline", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										invoice templates
									</Typography>
									{""} to get paid on time and for free — like a local.
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<img src={GetPaidImage} alt="" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default GetPaid;

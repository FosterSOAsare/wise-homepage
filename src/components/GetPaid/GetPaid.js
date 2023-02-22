import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import GetPaidImage from "../../assets/images/get-paid.png";
import style from "../../App.style";

const GetPaid = () => {
	return (
		<Box sx={style.getPaid}>
			<Container maxWidth="lg" sx={{ paddingBlock: { xs: "40px", md: "80px" } }}>
				<Grid container>
					<Grid item xs={12} md={6} sx={style.getPaid__textContent}>
						<Typography variant="h2" sx={{ fontSize: "26px", fontWeight: "bold", color: "#37517E" }}>
							Get paid faster.
						</Typography>

						<Typography variant="p" sx={style.getPaid__desc}>
							With Wise Business, you can get local bank details for 10 different currencies. Give them to your customers for an easy, free way to get paid. 50% of payments are instant
							or arrive in an hour.
						</Typography>
						<a href="https://wise.com/register?profileType=BUSINESS" target="_blank" rel="noreferrer">
							<Button
								variant="contained"
								sx={{ background: "#008FC9", marginTop: "20px", height: "45px", borderRadius: "2px", paddingInline: "28px", textTransform: "none", fontWeight: "bold" }}>
								Get started for free
							</Button>
						</a>

						<Box sx={style.getPaid__pros}>
							<Box sx={{ width: { xs: "100%", md: "48%" }, marginBottom: { xs: "30px", md: 0 } }}>
								<Typography variant="p" sx={style.getPaid__pro__heading}>
									Collect money seamlessly
								</Typography>
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079", width: "100%" }}>
									Easily withdraw from Amazon, Stripe, and more in up to 10 currencies.
								</Typography>
							</Box>
							<Box sx={{ width: { xs: "100%", md: "48%" } }}>
								<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
									Create clever invoices
								</Typography>
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									Add your local bank details to {""}
									<a
										href="https://wise.com/us/invoice-templates/"
										style={{ display: "inline", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										invoice templates
									</a>
									{""} to get paid on time and for free — like a local.
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} sx={style.getPaid__image}>
						<img src={GetPaidImage} alt="" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default GetPaid;

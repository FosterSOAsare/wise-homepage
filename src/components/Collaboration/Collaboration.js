import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import CollaborationLead from "../../assets/images/collaboration-lead.png";
import BatchPayment from "../../assets/images/batch-payments.png";
import Reconcilation from "../../assets/images/reconcilation.png";
import style from "../../App.style";

const Collaboration = () => {
	return (
		<Box sx={{ paddingBlock: "100px" }}>
			<Container maxWidth="lg">
				<Box>
					<Typography variant="h3" sx={{ textAlign: "center", fontSize: "26px", fontWeight: "bold", color: "#37517E", marginBottom: "20px" }}>
						Smarter workforce collaboration
					</Typography>
					<Typography variant="p" sx={{ textAlign: "center", width: "60%", display: "block", marginInline: "auto", lineHeight: "25px", opacity: "0.7" }}>
						No more back-and-forth over paying bills, and managing expenses, and cash flow. Give your accountant and team access to Wise, and control their permissions.
					</Typography>
					<img src={CollaborationLead} alt="" style={{ width: "100%" }} />
				</Box>

				<Grid container sx={{ justifyContent: "center", gap: "24px", marginTop: "40px" }} spacing={2}>
					<Grid item md={4}>
						<img src={Reconcilation} alt="" style={{ display: "block", marginInline: "auto", marginBottom: "20px" }} />
						<Typography variant="h4" sx={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginBottom: "20px", color: "#37517E" }}>
							Faster reconciliation
						</Typography>
						<Typography variant="p" sx={{ lineHeight: "25px", textAlign: "center", display: "block", fontWeight: "bold", opacity: "0.6" }}>
							Connect currency accounts to QuickBooks or Xero in real time to save time on manual admin.
						</Typography>
					</Grid>
					<Grid item md={4}>
						<img src={BatchPayment} alt="" style={{ display: "block", marginInline: "auto", marginBottom: "20px" }} />
						<Typography variant="h4" sx={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginBottom: "20px", color: "#37517E" }}>
							Make batch payments
						</Typography>
						<Typography variant="p" sx={{ lineHeight: "25px", textAlign: "center", display: "block", fontWeight: "bold", opacity: "0.6" }}>
							Pay up to 1,000 people in one click. Just upload a spreadsheet with details for each transfer and submit one payment
						</Typography>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					sx={{
						marginInline: "auto",
						display: "block",
						marginTop: "50px",
						...style.cta__button,
					}}>
					Get started for free
				</Button>
			</Container>
		</Box>
	);
};

export default Collaboration;

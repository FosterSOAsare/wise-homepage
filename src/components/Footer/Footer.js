import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FooterSection from "./FooterSection";
import footerData from "./data";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
	return (
		<Box sx={{ height: "800px", background: "#37517E", paddingBlock: "200px" }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					{footerData.map((e, index) => (
						<FooterSection key={index} {...e} />
					))}
					<Grid item lg={3}>
						<Typography variant="h3" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", color: "white" }}>
							Follow us
							<Box sx={{ marginTop: "20px", display: "flex", gap: "20px" }}>
								<FacebookIcon />
								<TwitterIcon />
								<InstagramIcon />
							</Box>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} sx={{ marginBlock: "20px 50px" }}>
					<Grid item lg={3}>
						<img src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="" style={{ marginRight: "25px" }} />
					</Grid>
					<Grid item lg={3}>
						<Typography variant="p" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", color: "white", textDecoration: "underline" }}>
							Legal <br />
							Country site map
						</Typography>
					</Grid>
					<Grid item lg={3}>
						<Typography variant="p" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", color: "white", textDecoration: "underline" }}>
							Privacy Policy
						</Typography>
					</Grid>
					<Grid item lg={3}>
						<Typography variant="p" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px", color: "white", textDecoration: "underline" }}>
							Cookie Policy
						</Typography>
					</Grid>
				</Grid>

				<Typography variant="p" sx={{ display: "block", textAlign: "center", fontSize: "12px", color: "white" }}>
					© Wise US Inc 2023
				</Typography>
				<Typography variant="p" sx={{ display: "block", textAlign: "center", maxWidth: "700px", fontSize: "12px", marginInline: "auto", color: "white", marginTop: "20px" }}>
					Wise US Inc is authorized to operate in
					<Typography variant="span">most states</Typography>. In the other states, the program is sponsored by Community Federal Savings Bank, to which we're a service provider.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;

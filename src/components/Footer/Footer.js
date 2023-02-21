import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FooterSection from "./FooterSection";
import footerData from "./data";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

const link = {
	fontSize: "14px",
	fontWeight: "700",
	marginBottom: "0px",
	color: "white",
	textDecoration: "underline",
	display: "block",
};
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
								<a href="https://www.facebook.com/wise" style={{ color: "white" }} target="_blank" rel="noreferrer">
									<FacebookIcon />
								</a>
								<a href="https://twitter.com/wise" style={{ color: "white" }} target="_blank" rel="noreferrer">
									<TwitterIcon />
								</a>
								<a href="https://www.instagram.com/wiseaccount" style={{ color: "white" }} target="_blank" rel="noreferrer">
									<InstagramIcon />
								</a>
							</Box>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} sx={{ marginBlock: "20px 50px" }}>
					<Grid item lg={3}>
						<a href="https://wise.com/us" target="_blank" rel="noreferrer">
							<img src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="" style={{ marginRight: "25px" }} />
						</a>
					</Grid>
					<Grid item lg={3}>
						<a style={link} href="https://wise.com/terms-and-conditions" target="_blank" rel="noreferrer">
							Legal
						</a>
						<a style={link} href="https://wise.com/us/local-sites" target="_blank" rel="noreferrer">
							Country site map
						</a>
					</Grid>
					<Grid item lg={3}>
						<a style={link} href="https://wise.com/us/legal/privacy-policy" target="_blank" rel="noreferrer">
							Privacy Policy
						</a>
						<a style={link} href="https://wise.com/public-resources/assets/public-navigation/modern_slavery_statement.pdf" target="_blank" rel="noreferrer">
							Modern slavery statement
						</a>
					</Grid>
					<Grid item lg={3}>
						<a href="https://wise.com/cookie-policy" target="_blank" rel="noreferrer" style={link}>
							Cookie Policy
						</a>
					</Grid>
				</Grid>

				<Typography variant="p" sx={{ display: "block", textAlign: "center", fontSize: "12px", color: "white" }}>
					© Wise US Inc 2023
				</Typography>
				<Typography variant="p" sx={{ display: "block", textAlign: "center", maxWidth: "700px", fontSize: "13px", marginInline: "auto", color: "white", marginTop: "20px" }}>
					Wise US Inc is authorized to operate in {""}
					<a href="https://wise.com/us/legal/state-licenses" style={{ color: "white", textDecoration: "underline" }} target="_blank" rel="noreferrer">
						most states
					</a>
					. In the other states, the program is sponsored by Community Federal Savings Bank, to which we're a service provider.
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;

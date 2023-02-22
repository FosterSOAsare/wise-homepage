import { Box, Container, Typography, Grid, Button } from "@mui/material";
import React from "react";
import style from "../../App.style";
import CurrenciesImage from "../../assets/images/all-currencies.png";
import { ReactComponent as ConnectAppsIcon } from "../../assets/images/connect-apps.svg";
import { ReactComponent as CashFlowImage } from "../../assets/images/cash-flow.svg";
import AlternateAirLines from "../../assets/images/alternate-airlines.jpg";
import DarkNavy from "../../assets/images/dark-navy.png";

const Pros = () => {
	return (
		<>
			<Box sx={style.pros}>
				<Container maxWidth="lg" sx={style.pros__container}>
					<Grid container sx={style.pros__grid__container}>
						<Grid item md={6.5} sx={style.pro__grid__image}>
							<img src={CurrenciesImage} alt="" className="pro__image" />
						</Grid>
						<Grid item md={5}>
							<Typography variant="h2" sx={style.pros__title}>
								All in one place
							</Typography>

							<Typography variant="p" sx={style.pros__desc}>
								Move money between currencies in seconds, always with the real exchange rate and without high conversion fees. See up to 54 currencies from one easy to use account.
							</Typography>

							<a href="https://wise.com/register?profileType=BUSINESS" target="_blank" rel="noreferrer">
								<Button variant="contained" sx={style.cta__button}>
									Get started for free
								</Button>
							</a>

							<Box sx={{ marginTop: "25px", display: "flex", width: "100%", gap: "10px", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" } }}>
								<Box sx={{ width: { xs: "98%", md: "48%" }, marginBottom: { xs: "30px", md: "0" } }}>
									<ConnectAppsIcon />
									<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
										Connect your apps
									</Typography>
									<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
										Integrate with platforms like QuickBooks to see all your money together.
									</Typography>
								</Box>
								<Box sx={{ width: { xs: "98%", md: "48%" } }}>
									<CashFlowImage />
									<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
										Cash flow control
									</Typography>
									<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
										Keep your international money in one place for full visibility.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={style.case__study}>
				<Container maxWidth="lg" sx={{ height: { md: "300px", xs: "auto" }, paddingRight: 0 }}>
					<Grid container sx={{ width: "100%", height: "100%", alignItems: "center", gap: "20px", justifyContent: "space-between" }}>
						<Grid item md={6} sx={{ height: "100%", width: "100%" }} xs={12}>
							<img src={AlternateAirLines} alt="" style={{ width: "100%", height: "100%" }} />
						</Grid>
						<Grid item md={5} sx={{ height: "70%" }} xs={12}>
							<Typography variant="h2" sx={{ ...style.case__study__title }}>
								"We used Wise to convert our USD revenue to GBP and saved £75k in the first nine months after switching from our bank."
							</Typography>

							<Typography variant="p" sx={style.pros__desc}>
								-Alternative Airlines
							</Typography>

							<a href="https://wise.com/gb/business/exchange-rates-alternative-airlines-savings" target="_blank" rel="noreferrer">
								<Button variant="contained" sx={style.cta__button}>
									Read case study
								</Button>
							</a>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box sx={{ height: "auto", backgroundImage: `url(${DarkNavy})`, paddingBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ height: "200px", paddingRight: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
					<Typography
						variant="h2"
						sx={{ ...style.hero__title, fontSize: "26px", color: "white", width: "95%", lineHeight: "30px", fontFamily: "'Averta' , sans-serif", textAlign: "center" }}>
						Wise for larger businesses
					</Typography>

					<Typography variant="p" sx={{ ...style.hero__desc, width: { md: "42%", xs: "95%" }, textAlign: "center", color: "white" }}>
						Our team of experts can help your team scale and grow globally. Get in touch to hear how Wise Business can work for you.
					</Typography>

					<a href="https://wise.com/gb/business/contact?utm_medium=bhomepage&utm_campaign=banner" target="_blank" rel="noreferrer">
						<Button
							variant="contained"
							sx={{ ...style.cta__button, backgroundColor: "#2EAD4B", marginInline: "auto", display: "block", "&:hover": { backgroundColor: "#2EAD4B" }, marginTop: "40px" }}>
							Speak to sales
						</Button>
					</a>
				</Container>
			</Box>
		</>
	);
};

export default Pros;

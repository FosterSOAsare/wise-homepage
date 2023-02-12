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
			<Box sx={{ height: "auto", backgroundColor: "#F2F5F7", paddingBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ height: "400px", paddingRight: 0 }}>
					<Grid container sx={{ width: "100%", height: "100%", alignItems: "flex-start", gap: "20px" }}>
						<Grid item lg={6} sx={{ height: "100%", width: "100%" }}>
							<img src={CurrenciesImage} alt="" style={{ width: "100%", height: "100%" }} />
						</Grid>
						<Grid item lg={5} sx={{ height: "70%" }}>
							<Typography variant="h2" sx={{ ...style.hero__title, fontSize: "26px", color: "#37517E" }}>
								All in one place
							</Typography>

							<Typography variant="p" sx={style.hero__desc}>
								Move money between currencies in seconds, always with the real exchange rate and without high conversion fees. See up to 54 currencies from one easy to use account.
							</Typography>

							<Button variant="contained" sx={style.cta__button}>
								Get started for free
							</Button>

							<Box sx={{ marginTop: "25px", display: "flex", width: "100%", gap: "10px", justifyContent: "space-between" }}>
								<Box sx={{ width: "48%" }}>
									<ConnectAppsIcon />
									<Typography variant="p" sx={{ fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" }}>
										Connect your apps
									</Typography>
									<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
										Integrate with platforms like QuickBooks to see all your money together.
									</Typography>
								</Box>
								<Box sx={{ width: "48%" }}>
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
			<Box sx={{ height: "auto", backgroundColor: "white", paddingBlock: "100px" }}>
				<Container maxWidth="lg" sx={{ height: "300px", paddingRight: 0 }}>
					<Grid container sx={{ width: "100%", height: "100%", alignItems: "center", gap: "20px", justifyContent: "space-between" }}>
						<Grid item lg={6} sx={{ height: "100%", width: "100%" }}>
							<img src={AlternateAirLines} alt="" style={{ width: "100%", height: "100%" }} />
						</Grid>
						<Grid item lg={5} sx={{ height: "70%" }}>
							<Typography variant="h2" sx={{ ...style.hero__title, fontSize: "26px", color: "#37517E", width: "95%", lineHeight: "30px", fontFamily: "'Averta' , sans-serif" }}>
								"We used Wise to convert our USD revenue to GBP and saved £75k in the first nine months after switching from our bank."
							</Typography>

							<Typography variant="p" sx={style.hero__desc}>
								-Alternative Airlines
							</Typography>

							<Button variant="contained" sx={style.cta__button}>
								Read case study
							</Button>
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

					<Typography variant="p" sx={{ ...style.hero__desc, width: "42%", textAlign: "center", color: "white" }}>
						Our team of experts can help your team scale and grow globally. Get in touch to hear how Wise Business can work for you.
					</Typography>

					<Button
						variant="contained"
						sx={{ ...style.cta__button, backgroundColor: "#2EAD4B", marginInline: "auto", display: "block", "&:hover": { backgroundColor: "#2EAD4B" }, marginTop: "40px" }}>
						Speak to sales
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default Pros;

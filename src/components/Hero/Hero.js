import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/images/hero.png";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import style from "../../App.style";

const Hero = () => {
	return (
		<Box sx={{ ...style.hero, paddingTop: "70px" }}>
			<Container maxWidth="lg" sx={style.hero__container}>
				<Grid container sx={{ width: "100%", height: "100%", alignItems: "center" }}>
					<Grid item md={4} sx={{ height: "70%" }}>
						<Typography variant="h2" sx={style.hero__title}>
							The{" "}
							<Typography variant="span" sx={{ color: "#00A2DD" }}>
								no-stress{" "}
							</Typography>
							international business account
							<Typography variant="span" sx={{ color: "#00A2DD" }}>
								.
							</Typography>
						</Typography>

						<Typography variant="p" sx={style.hero__desc}>
							Business banking without the high rates, hidden charges, and monthly fees. Pay employees, get paid and manage your cash flow overseas — in one place.
						</Typography>

						<a href="https://wise.com/register?profileType=BUSINESS" style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noreferrer">
							<Button variant="contained" sx={{ ...style.cta__button, ...style.hero__cta }}>
								Set up in minutes
							</Button>
						</a>

						<Box sx={style.hero__pros}>
							<Box sx={style.hero__pro}>
								<LockIcon sx={style.hero__pro__icon} />
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									We safeguard your money in top financial institutions
									<a
										href="https://wise.com/help/articles/2949821/is-it-safe-to-keep-money-in-my-multi-currency-account"
										style={{ display: "block", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										Learn more
									</a>
								</Typography>
							</Box>
							<Box sx={style.hero__pro}>
								<SearchIcon sx={{ ...style.hero__pro__icon }} />
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									We're an authorized financial services provider
									<a
										href="https://wise.com/help/articles/2736041/is-transferwise-safe"
										style={{ display: "block", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										Learn more
									</a>
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item md={7.3} sx={{ position: " absolute", right: "0px", height: "100%", width: "100%", display: { xs: "none", md: "block" } }}>
						<img src={HeroImage} alt="" style={{ width: "100%", height: "100%" }} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;

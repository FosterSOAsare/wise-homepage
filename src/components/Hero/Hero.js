import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/images/hero.png";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import style from "../../App.style";

const Hero = () => {
	return (
		<Box sx={{ backgroundColor: "#ffffff", width: "100%", height: "auto", position: "relative" }}>
			<Container maxWidth="lg" sx={{ height: "700px", paddingRight: 0 }}>
				<Grid container sx={{ width: "100%", height: "100%", alignItems: "center" }}>
					<Grid item lg={4} sx={{ height: "70%" }}>
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

						<Button variant="contained" sx={style.cta__button}>
							Set up in minutes
						</Button>

						<Box sx={{ marginTop: "25px", display: "flex", width: "110%", gap: "10px" }}>
							<Box>
								<LockIcon sx={{ display: "block", fontSize: "40px", color: "#37517e", marginBottom: "10px" }} />
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									We safeguard your money in top financial institutions
									<Typography variant="span" sx={{ display: "block", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										Learn more
									</Typography>
								</Typography>
							</Box>
							<Box>
								<SearchIcon sx={{ display: "block", fontSize: "40px", color: "#37517e", marginBottom: "10px" }} />
								<Typography variant="p" sx={{ lineHeight: "25px", fontWeight: "400", color: "#5d7079" }}>
									We're an authorized financial services provider
									<Typography variant="span" sx={{ display: "block", color: "#00a2dd", fontWeight: "bold", textDecoration: "underline", "&:hover": { cursor: "pointer" } }}>
										Learn more
									</Typography>
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item lg={7.3} sx={{ position: " absolute", right: "0px", height: "100%", width: "100%" }}>
						<img src={HeroImage} alt="" style={{ width: "100%", height: "100%" }} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;

import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import style from "../../App.style";
import { ReactComponent as BrandFlag } from "../../assets/images/brand_flag.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";

import NavBar from "./NavBar/NavBar";

const Header = ({ setShowMenu }) => {
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("ss"));
	const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
	return (
		<Box sx={{ backgroundColor: "#37517E", height: "80px" }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Grid container sx={{ justifyContent: "space-between", alignItems: "center", height: "100%" }}>
					<Grid item lg={4} sx={{ alignItems: "center", justifyContent: "flex-start", display: { xs: "none", ss: "flex" } }}>
						<img src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="" style={{ marginRight: "25px" }} />
						{!isMediumScreen && (
							<Button variant="text" sx={{ ...style.button, ...style.hero__left__btn, color: "white" }}>
								Personal
							</Button>
						)}
						{!isMediumScreen && <Box sx={{ ...style.button, marginInline: "20px", height: "30px", opacity: "0.7", width: "1px", background: "white" }}></Box>}
						{!isMediumScreen && (
							<Button variant="text" sx={{ ...style.button, color: "#02B4F9" }}>
								Business
							</Button>
						)}
					</Grid>
					{isSmallScreen && (
						<Grid item lg={4} sx={{ alignItems: "center", justifyContent: "flex-start" }}>
							<BrandFlag />
						</Grid>
					)}
					<Grid item lg={6} sx={{ justifyContent: "flex-start", display: "flex", alignItems: "center" }}>
						<NavBar />
						<Button
							variant="text"
							sx={{
								color: "white",
								...style.button,
								display: { xs: "none", ss: "block" },
								"&:hover": {
									color: "#02b4f9",
									background: "transparent",
								},
							}}>
							Login
						</Button>
						<Button
							variant="outlined"
							sx={{
								color: "#008FC9",
								opacity: "1",
								...style.button,
								height: "30px",
								borderRadius: "3px",
								"&:hover": {
									background: "#02b4f9",
									color: "white",
								},
							}}>
							Register
						</Button>
						{/* Menu Icon */}
						<MenuIcon
							sx={style.menu__icon}
							onClick={() => {
								setShowMenu(true);
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Header;

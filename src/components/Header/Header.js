import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import style from "../../App.style";
import { ReactComponent as BrandFlag } from "../../assets/images/brand_flag.svg";
import MenuIcon from "@mui/icons-material/Menu";

import NavBar from "./NavBar/NavBar";

const Header = ({ setShowMenu }) => {
	return (
		<Box sx={{ backgroundColor: "#37517E", height: "80px" }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Grid container sx={{ justifyContent: "space-between", alignItems: "center", height: "100%" }}>
					<Grid item lg={4} sx={{ alignItems: "center", justifyContent: "flex-start", display: { xs: "none", ss: "flex" } }}>
						<img src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="" style={{ marginRight: "25px" }} />
						<Button
							variant="text"
							sx={{
								...style.button,
								textTransform: "none",
								color: "white",
								fontWeight: "bold",
								fontSize: "16px",
								display: { xs: "none", md: "block" },
								"&:hover": {
									color: "#02B4F9",
									background: "transparent",
								},
							}}>
							Personal
						</Button>
						<Box
							sx={{
								...style.button,
								marginInline: "20px",
								height: "30px",
								opacity: "0.7",
								width: "1px",
								background: "white",
								display: { xs: "none", md: "block" },
							}}></Box>
						<Button
							variant="text"
							sx={{
								textTransform: "none",
								color: "#02B4F9",
								fontWeight: "bold",
								fontSize: "16px",
								display: { xs: "none", md: "block" },
							}}>
							Business
						</Button>
					</Grid>
					<Grid item lg={4} sx={{ alignItems: "center", justifyContent: "flex-start", display: { xs: "block", ss: "none" } }}>
						<BrandFlag />
					</Grid>
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
						<MenuIcon sx={style.menu__icon} onClick={() => setShowMenu(true)} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Header;

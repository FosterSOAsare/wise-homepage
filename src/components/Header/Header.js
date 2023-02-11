import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "../../App.style";

let nav = ["Account", "Platform", "Fees", "About"];
const Header = () => {
	return (
		<Box sx={{ backgroundColor: "#37517E", height: "80px" }}>
			<Container maxWidth="lg" sx={{ height: "100%" }}>
				<Grid container sx={{ justifyContent: "space-between", alignItems: "center", height: "100%" }}>
					<Grid item lg={4} sx={{ alignItems: "center", justifyContent: "flex-start", display: "flex" }}>
						<img src="https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg" alt="" style={{ marginRight: "25px" }} />
						<Button
							variant="text"
							sx={{
								...style.button,
								textTransform: "none",
								color: "white",
								fontWeight: "bold",
								fontSize: "16px",
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
							}}></Box>
						<Button
							variant="text"
							sx={{
								textTransform: "none",
								color: "#02B4F9",
								fontWeight: "bold",
								fontSize: "16px",
							}}>
							Business
						</Button>
					</Grid>
					<Grid item lg={6} sx={{}}>
						{nav.map((e, index) => {
							return (
								<Button key={index} sx={{ ...style.button, marginRight: "10px", color: "white" }} endIcon={<KeyboardArrowDownIcon />}>
									{e}
								</Button>
							);
						})}
						<Button
							variant="text"
							sx={{
								color: "white",
								...style.button,
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
								color: "#02b4f9",
								...style.button,
								"&:hover": {
									background: "#02b4f9",
									color: "white",
								},
							}}>
							Register
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Header;

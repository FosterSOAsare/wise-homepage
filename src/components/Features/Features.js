import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import WorldMap from "../../assets/images/worldmap.png";
import { KeyboardArrowDown } from "@mui/icons-material";
import style from "../../App.style";
import Feature from "./Feature";

const Features = () => {
	return (
		<Box sx={{ ...style.features, backgroundImage: `url(${WorldMap})` }}>
			<Typography variant="h3" sx={{ ...style.hero__title, fontSize: "26px", color: "#253655", textAlign: "center", marginBottom: "10px" }}>
				Product features
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "center", flexDirection: { xs: "column", ss: "row" }, alignItems: "center" }}>
				<Typography variant="p" sx={{ display: "block", marginBottom: { xs: "5px", ss: "0" } }}>
					Your business is registered in
				</Typography>
				<Button
					variant="outlined"
					endIcon={<KeyboardArrowDown sx={{ position: "relative" }} />}
					sx={{ marginLeft: "10px", textTransform: "none", borderColor: "#B5B7BA", opacity: "0.7", color: "black", height: "50px" }}>
					United States
				</Button>
			</Box>
			<Grid container spacing={2} sx={style.features__grid__container}>
				<Feature heading="Wise Business account" desc="Get an account for free and make payments with the real exchange rate in 70+ countries." />
				<Feature desc="Get everything you need to bank abroad — including a sort code, IBAN, routing number, and more." heading="Banking alternative" />
				<Feature heading="Debit card" desc="Unfortunately, this isn’t available where you’re registered. We’re working hard to make it happen" available={false} />
			</Grid>
			<a href="https://wise.com/register/?profileType=BUSINESS" target="_blank" rel="noreferrer">
				<Button variant="contained" sx={{ ...style.cta__button, marginTop: "30px", display: "block" }}>
					Get started
				</Button>
			</a>
		</Box>
	);
};

export default Features;

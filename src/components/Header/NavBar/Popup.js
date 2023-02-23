import React from "react";
import style from "../../../App.style";
import { Typography, Box } from "@mui/material";

const Popup = ({ image, links, desc, name }) => {
	return (
		<aside className="popup" style={{ ...style.header__popUp }}>
			<Box sx={{ padding: "40px 30px" }}>
				{image}
				<Typography
					variant="h3"
					sx={{
						fontSize: "16px",
						marginTop: "20px",
						marginBottom: "10px",
						fontWeight: "bold",
						"&:hover": {
							color: "#00A2DD",
						},
					}}>
					{name}
				</Typography>
				<Typography variant="p" sx={{ color: "#5d7079", fontSize: "16px", fontWeight: "400" }}>
					{desc}
				</Typography>
			</Box>

			<Box sx={{ width: "100%", background: "#F3F6F8", padding: "40px 30px" }}>
				{links.map((e, index) => (
					<a href={e.link} key={index} variant="p" className="desktop__link">
						{e.name}
					</a>
				))}
			</Box>
		</aside>
	);
};

export default Popup;

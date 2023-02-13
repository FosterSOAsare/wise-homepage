import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const FooterSection = ({ heading, items }) => {
	return (
		<Grid item lg={3} sx={{ color: "white" }}>
			<Typography variant="h3" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
				{heading}
			</Typography>

			{items.map((e, index) => (
				<Typography
					key={index}
					sx={{
						fontSize: "14px",
						textDecoration: "underline",
						"&:hover": {
							cursor: "pointer",
						},
					}}>
					{e}
				</Typography>
			))}
		</Grid>
	);
};

export default FooterSection;

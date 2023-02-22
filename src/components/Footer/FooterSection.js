import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const FooterSection = ({ heading, items }) => {
	return (
		<Grid item sx={{ color: "white" }} md={3} sm={6} xs={12}>
			<Typography variant="h3" sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
				{heading}
			</Typography>

			{items.map((e, index) => (
				<a
					key={index}
					href={e.link}
					target="_blank"
					rel="noreferrer"
					style={{
						fontSize: "14px",
						textDecoration: "underline",
						color: "white",
						display: "block",
						marginBottom: "5px",
						"&:hover": {
							cursor: "pointer",
						},
					}}>
					{e.name}
				</a>
			))}
		</Grid>
	);
};

export default FooterSection;

const featuresStyles = {
	features: {
		height: { md: "600px", xs: "auto" },
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingBlock: { xs: "80px", md: "0" },
	},

	features__grid__container: {
		width: { md: "95%", sm: "90%", xs: "350px" },
		height: "auto",
		marginTop: "20px",
		justifyContent: { md: "space-between", xs: "center" },
		alignItems: "center",
		marginInline: "auto",
	},

	feature: {
		height: "250px",

		boxShadow: "2px 2px 3px 0px #ECECEC , -2px -2px 3px 0px #ECECEC ",
		width: "100%",
		borderRadius: "5px",
		padding: "30px 10px",
		marginBottom: { xs: "20px", md: 0 },
	},
};

export default featuresStyles;

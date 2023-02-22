const heroStyles = {
	hero: { backgroundColor: "#ffffff", width: "100%", height: "auto", position: "relative" },
	hero__container: { height: { xs: "auto", md: "700px" }, paddingRight: 0, paddingBlock: { xs: "30px", sm: "60px", md: "0" }, paddingInline: "20px" },
	hero__title: {
		fontSize: "42px",
		fontWeight: "bold",
		color: "#37517E",
		width: { xs: "100%", sm: "50%", md: "100%" },
		maxWidth: { xs: "400px" },
		textAlign: { xs: "left", sm: "center", md: "left" },
		marginInline: { sm: "auto" },
	},
	menu__icon: { display: { xs: "block", md: "none" }, color: "#00A2DD", marginLeft: "10px" },
	hero__desc: {
		color: "#5d7079",
		marginTop: "20px",
		display: "block",
		lineHeight: "25px",
		width: { xs: "95%", md: "100%", sm: "60%" },
		textAlign: { xs: "left", sm: "center", md: "left" },
		marginInline: { sm: "auto" },
	},
	hero__cta: {
		display: "block",
		marginInline: { xs: "0", sm: "auto", md: "0" },
	},
	hero__pros: { marginTop: "25px", display: "flex", width: { md: "110%", sm: "65%", xs: "98%" }, gap: { xs: "20px", md: "10px" }, marginInline: { sm: "auto" } },
	hero__pro: { display: { sm: "flex", md: "block" }, flexDirection: "column", textAlign: { sm: "center", md: "left" }, width: "50%" },
	hero__pro__icon: { display: "block", fontSize: "40px", color: "#37517e", marginBottom: "10px", marginInline: { xs: "0", sm: "auto", md: "0" } },
};

export default heroStyles;

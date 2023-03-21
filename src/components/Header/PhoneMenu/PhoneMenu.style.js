const phoneMenuStyles = {
	phoneMenu: {
		width: "100%",
		height: "100%",
		position: "fixed",
		background: "#334B76",
		display: { xs: "block", md: "none" },
		zIndex: "4",
		top: "0",
		left: "-100%",
		transition: "all 0.5s ease-in-out",
	},
	phoneMenu__top: {
		width: "100%",
		height: "70px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 20px",
	},
	phoneMenu__content: {
		overflow: "auto",
		height: "calc(100% - 70px )",
		position: "relative",
	},
	phoneMenu__nav: {
		backgroundColor: "#253655",
		height: "70px",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "0 20px",
		position: "relative",
	},
	phoneMenu__nav__link: {
		color: "white",
		fontWeight: "bold",
	},
	nav__stroke: {
		background: "grey",
		width: "2px",
		height: "20px",
		marginInline: "20px",
	},
	phoneMenu__accordion: { backgroundColor: "transparent", border: "none", outline: "transparent", boxShadow: "none", borderBottom: "20px", padding: "0 10px" },

	phoneMenu__ctas: {
		width: "100%",
		display: "block",
		padding: "0 20px",
	},
	phoneMenu__cta: {
		display: "block",
		width: "100%",
		height: "40px",
		borderRadius: "0",
		marginBottom: "20px",
		textTransform: "none",
		"&:hover": {
			color: "white",
		},
	},
};

export default phoneMenuStyles;

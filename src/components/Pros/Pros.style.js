const prosStyles = {
	pros: { height: "auto", backgroundColor: "#F2F5F7", paddingBlock: "100px" },
	pros__container: { height: { md: "420px", xs: "auto" }, paddingRight: 0 },
	pros__grid__container: { width: "100%", height: "auto", alignItems: "flex-start", gap: "20px" },
	pro__grid__image: { height: { md: "100%", xs: "300px" }, width: "100%", display: "flex", justifyContent: "center" },
	pros__title: {
		fontSize: "26px",
		color: "#37517E",
		textAlign: "left",
		fontWeight: "bold",
		marginInline: { sm: "auto" },
	},
	pros__desc: {
		color: "#5d7079",
		marginTop: "20px",
		display: "block",
		lineHeight: "25px",
		marginInline: { sm: "auto" },
	},

	case__study: { height: "auto", backgroundColor: "white", paddingBlock: { md: "100px", xs: "50px 80px" } },
	case__study__title: { fontSize: "26px", color: "#37517E", width: "95%", lineHeight: "30px", fontFamily: "'Averta' , sans-serif", fontWeight: "bold" },
};

export default prosStyles;

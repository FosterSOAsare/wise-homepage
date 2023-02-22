const tradeStyles = {
	trade: { width: "100%", height: { xs: "auto", md: "470px" }, paddingInline: { xs: "5px", md: "0" } },
	trade__grid__container: { height: "100%", alignItems: "center", justifyContent: "space-between", gap: { xs: "50px", sm: "0" }, paddingBlock: { xs: "40px", md: "0" } },
	exchange__area: { height: "auto" },

	inputField__container: { width: "100%", height: "100%", borderRadius: "5px", overflow: "hidden" },
	field__label: { fontSize: "14px", marginBottom: "3px", display: "block", opacity: "0.7" },
	country__select: { height: "100%", background: "#2E4369", justifyContent: "center", alignItems: "center", display: "flex", width: "100%", color: "white" },

	line__stroke: {
		width: "93%",
		height: "70px",
		borderLeft: "1px solid #c9cbce",
		padding: "0 20px",
		marginLeft: "7%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: "20px",
		position: "relative",
	},
	dashed__circle: {
		height: "20px",
		width: "20px",
		background: "#c9cbce",
		position: "absolute",
		left: "-10px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50%",
	},
	fee__type: { textTransform: "none", color: "#37517e", borderColor: "#c9cbce", fontSize: "14px", height: "30px", width: "auto", minWidth: "140px" },
};

export default tradeStyles;

const style = {
	button: {
		textTransform: "none",
		fontFamily: "'Averta' , sans-serif",
		fontWeight: "600",
		"&:hover": {
			background: "transparent",
			color: "#02B4F9",
		},
	},
	hero__title: { fontSize: "42px", fontWeight: "bold", color: "#37517E" },
	hero__desc: { color: "#5d7079", marginTop: "20px", display: "block", lineHeight: "25px" },
	cta__button: { background: "#008FC9", marginTop: "20px", height: "45px", borderRadius: "2px", paddingInline: "28px", textTransform: "none", fontWeight: "bold" },
	header__popUp: {
		display: "none",
		position: "absolute",
		top: "100%",
		right: 0,
		height: "400px",
		width: "200px",
		backgroundColor: "red",
		zIndex: "3",
		"&::before": {
			content: "asare",
			height: "30px",
			width: "30px",
			backgroundColor: "green",
			position: "absolute",
			right: "10px",
			top: "-5px",
			zIindex: "5",
		},
	},
};

export default style;

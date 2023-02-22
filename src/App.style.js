import heroStyles from "./components/Hero/Hero.style";
import getPaidStyle from "./components/GetPaid/GetPaid.style";
import tradeStyles from "./components/Trade/Trade.style";
import collaborationStyle from "./components/Collaboration/Collaboration.style";
import prosStyles from "./components/Pros/Pros.style";
import featuresStyles from "./components/Features/Features.style";

const style = {
	button: {
		textTransform: "none",
		fontFamily: "'Averta' , sans-serif",
		fontWeight: "600",
		borderWidth: "2px",
		"&:hover": {
			background: "transparent",
			color: "#02B4F9",
		},
	},
	...heroStyles,
	...tradeStyles,
	...getPaidStyle,
	...collaborationStyle,
	...prosStyles,
	...featuresStyles,
	cta__button: { background: "#008FC9", marginTop: "20px", height: "45px", borderRadius: "2px", paddingInline: "28px", textTransform: "none", fontWeight: "bold" },
	header__popUp: {
		position: "absolute",
		top: "100%",
		right: "-11px",
		height: "auto",
		width: "470px",
		zIndex: "3",
		color: "#37517E",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "column",
		textAlign: "left",
		boxShadow: "0px 2px 5px 0px rgba(255,255,245,0.75)",
	},
	active: {
		display: "block",
	},
};

export default style;

const getPaidStyle = {
	getPaid: { height: { md: "650px", sx: "auto" }, backgroundColor: "#F2F5F7", display: "flex", alignItems: "center", justifyContent: "center", overflowX: "hidden" },
	getPaid__textContent: { order: { xs: "2", md: "1" }, marginTop: { xs: "60px", md: "0" } },
	getPaid__image: { order: { xs: "1", md: "2" }, display: "flex", justifyContent: "center", alignItems: "center", margin: 0 },

	getPaid__pros: { marginTop: "25px", display: "flex", width: { md: "80%", xs: "98%" }, gap: "10px", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" } },
	getPaid__desc: { color: "#5d7079", marginTop: "20px", display: "block", lineHeight: "25px", width: { xs: "98%", md: "75%" } },
	getPaid__pro__heading: { fontWeight: "bold", display: "block", color: "#5d7079", fontSize: "15px", marginBottom: "10px" },
};
export default getPaidStyle;

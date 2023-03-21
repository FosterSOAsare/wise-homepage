import React from "react";
import { Box, Button } from "@mui/material";
import style from "../../../App.style";
import navData from "../NavBar/NavbarData";
import MenuAccordion from "./MenuAccordion";
import { ReactComponent as BrandFlag } from "../../../assets/images/brand_flag.svg";
import CloseIcon from "@mui/icons-material/Close";

const PhoneMenu = ({ setShowMenu, showMenu }) => {
	return (
		<Box sx={{ ...style.phoneMenu, left: showMenu ? "0%" : "-100%" }}>
			<Box sx={style.phoneMenu__top}>
				<BrandFlag />
				<CloseIcon sx={{ color: "#00A2DD" }} onClick={() => setShowMenu(false)} />
			</Box>
			<Box sx={style.phoneMenu__content}>
				<Box sx={style.phoneMenu__nav}>
					<a href="https://wise.com/us/" className="phoneMenu__nav__link" target="_blank" rel="noreferrer">
						Personal
					</a>
					<Box sx={style.nav__stroke}></Box>

					<a href="https://wise.com/us/business/" className="phoneMenu__nav__link" style={{ color: "#008fc9" }} target="_blank" rel="noreferrer">
						Business
					</a>
				</Box>
				<Box sx={{ width: "100%", minHeight: "calc(100% - 100px - 100px)" }}>
					{navData.map((e, index) => (
						<MenuAccordion key={index} {...e} />
					))}
				</Box>
				<Box sx={style.phoneMenu__ctas}>
					<Button variant="outlined" sx={style.phoneMenu__cta}>
						Log in
					</Button>
					<Button variant="contained" sx={style.phoneMenu__cta}>
						Register
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default PhoneMenu;

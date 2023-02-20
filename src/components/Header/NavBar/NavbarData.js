import PaymentPopUp from "./Popups/PaymentPopUp";
import HelpPopup from "./Popups/HelpPopup";
import FeesPopup from "./Popups/FeesPopup";
import PlatformPopUp from "./Popups/PlatformPopUp";

let navData = [
	{ name: "Payments", element: <PaymentPopUp /> },
	{ name: "Platform", element: <PlatformPopUp /> },
	{ name: "Fees", element: <FeesPopup /> },
	{ name: "Help", element: <HelpPopup /> },
];

export default navData;

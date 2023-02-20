import { ReactComponent as Payment } from "../../../assets/images/payment.svg";
import { ReactComponent as Help } from "../../../assets/images/teams.svg";
import { ReactComponent as Platform } from "../../../assets/images/phone_number.svg";
import { ReactComponent as Fees } from "../../../assets/images/saving.svg";
let navData = [
	{
		name: "Payments",
		image: <Payment />,
		desc: "Discover how 600,000+ business customers globally make and receive international payments.",
		links: ["Pay Invoices", "Receive money", "Batch payments", "Payroll", "Track expenses"],
		active: true,
	},
	{
		name: "Platform",
		image: <Platform />,

		desc: "Discover how to integrate Wise Business with a range of software, apps and tools.",
		links: ["API Integrations", "App Marketplace", "Bank Integrations"],
	},
	{
		name: "Fees",
		image: <Fees />,
		desc: "Get the information you need to know about our pricing, exchange rates and fees.",
		links: ["Pricing", "Mid-market exchange rate"],
	},
	{
		name: "Help",
		image: <Help />,
		desc: "Find answers to common questions. Get the information and support you're looking for.",
		links: ["Contact support", "Contact sales"],
	},
];

export default navData;

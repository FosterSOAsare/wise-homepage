import { ReactComponent as Payment } from "../../../assets/images/payment.svg";
import { ReactComponent as Help } from "../../../assets/images/teams.svg";
import { ReactComponent as Platform } from "../../../assets/images/phone_number.svg";
import { ReactComponent as Fees } from "../../../assets/images/saving.svg";
let navData = [
	{
		name: "Payments",
		image: <Payment />,
		desc: "Discover how 600,000+ business customers globally make and receive international payments.",
		links: [
			{ name: "Pay Invoices", link: "https://wise.com/us/business/invoices" },
			{ name: "Receive money", link: "https://wise.com/us/business/receive-money" },
			{ name: "Batch payments", link: "https://wise.com/us/business/payouts" },
			{ name: "Payroll", link: "https://wise.com/us/business/payments" },
			{ name: "Track expenses", link: "https://wise.com/us/business/cash-management" },
		],
	},
	{
		name: "Platform",
		image: <Platform />,

		desc: "Discover how to integrate Wise Business with a range of software, apps and tools.",
		links: [
			{ name: "API Integrations", link: "https://wise.com/us/business/api" },
			{ name: "App Marketplace", link: "https://wise.com/us/business/app-marketplace" },
			{ name: "Bank Integrations", link: "https://wise.com/us/business/banks" },
		],
	},
	{
		name: "Fees",
		image: <Fees />,
		desc: "Get the information you need to know about our pricing, exchange rates and fees.",
		links: [
			{ name: "Pricing", link: "https://wise.com/us/pricing/business" },
			{ name: "Mid-market exchange rate", link: "https://wise.com/us/mid-market-rate" },
		],
	},
	{
		name: "Help",
		image: <Help />,
		desc: "Find answers to common questions. Get the information and support you're looking for.",
		links: [
			{ name: "Contact support", link: "https://wise.com/help/" },
			{ name: "Contact sales", link: "https://wise.com/gb/business/contact?utm_medium=bhomepage&utm_campaign=sales" },
		],
	},
];

export default navData;

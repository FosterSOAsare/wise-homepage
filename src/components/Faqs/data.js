import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const accordionData = [
	{
		question: "How much does it cost to open an account",
		answer: (
			<Typography>
				It's free to set up your Wise Business account. <br />
				<br />
				There's a cheap, transparent fee to convert between currencies — either in your account or if you spend on your Wise Business Mastercard® in a currency you don't have in your account.{" "}
				<br />
				<br />
				If you want to get international bank details, there's a one-time, and it's free to receive money using some of your bank details. <br />
				<br />
				When you convert money in your account it's always with the real exchange rate, and you always see our low, transparent fee up front so there's never any surprises. And if you spend on
				your Business Mastercard in a currency you don't have, it autoconverts the balance with the lowest fee, so you never have to worry.
			</Typography>
		),
	},
	{
		question: "How much does it cost to transfer money to another bank account?",
		answer: (
			<>
				<Typography>
					There's a small fixed fee to withdraw funds from your Wise Business account to another account in the same currency.
					<br />
					<br />
					This is the lowest we can charge to cover costs, and we're committed to getting the fee down over time.
				</Typography>
				<a href="https://wise.com/us/business/pricing-and-coverage" target="_blank" rel="noreferrer">
					<Button
						variant="text"
						sx={{ textTransform: "none", display: "block", marginTop: "20px", padding: "0", color: "#00a1db", textDecoration: "underline", fontSize: "16px", fontWeight: "600" }}>
						Learn more about our pricing →
					</Button>
				</a>
			</>
		),
	},
	{
		question: `How much does it cost to convert money to another currency in my account?`,
		answer: (
			<Typography>
				We use the real exchange rate plus a small conversion fee when you convert a balance in your account to a different currency.
				<br />
				<br />A full list of our currencies and pricing is available
				<a href="https://wise.com/us/business/pricing-and-coverage" target="_blank" rel="noreferrer">
					<Button
						variant="text"
						sx={{
							textTransform: "none",
							padding: "0",
							color: "#00a1db",
							textDecoration: "underline",
							fontSize: "14px",
							fontWeight: "600",
							display: "inline-block",
							marginTop: "-2px",
							"&:hover": {
								textDecoration: "underline",
								backgroundColor: "transparent",
							},
						}}>
						here →
					</Button>
				</a>
			</Typography>
		),
	},
	{
		question: "Does my recipient need an account to receive money?",
		answer: <Typography>No. When you send money with Wise Business it goes directly into your recipient's bank account.</Typography>,
	},
];

export default accordionData;

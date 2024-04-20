import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReduxProvider } from "@/helpers/ReduxProvider";
import Footer from "./sections/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
	title: "Home Page",
	description:
		"Welocme to our store, discover a lot of products and items for everything you need!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ReduxProvider>
					<Navbar />
					{children}
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
}

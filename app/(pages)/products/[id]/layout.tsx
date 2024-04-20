import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Home page | Product",
	description: "Everything you want to know about your product!",
};

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return <div>{children}</div>;
};

export default layout;

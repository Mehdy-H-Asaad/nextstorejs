import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "About Us",
	description: "This is our story and how we did start our journey!",
};

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return <div>{children}</div>;
};
export default layout;

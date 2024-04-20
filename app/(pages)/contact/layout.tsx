import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Feel free to contact us and ask everthing you want!",
};

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return <div>{children}</div>;
};

export default layout;

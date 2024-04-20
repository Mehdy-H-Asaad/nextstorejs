"use client";
import { navLinks } from "@/components/Navbar";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	const socialArray = [
		<FaFacebookF size={20} />,
		<FaLinkedin size={20} />,
		<FaInstagram size={20} />,
	];

	return (
		<section className="bg-[#faedeb] mt-20 pt-20">
			<div className="text-center">
				<p className="text-gray-500 text-xl mb-1">Latest News</p>
				<h1 className="font-bold text-xl md:text-3xl">
					Subscribe To Get Offers In Your Inbox
				</h1>
			</div>
			<form className="text-center flex mt-8 px-4 md:px-32">
				<input
					type="text"
					placeholder="Your email address..."
					className="w-[75%] p-4 border-none outline-none"
				/>
				<button className="w-full text-xl font-[600] md:w-[25%] p-4 ml-4 bg-black text-white">
					Subscribe
				</button>
			</form>
			<ul className="flex gap-4 justify-center mt-12">
				{navLinks.map(ele => {
					return (
						<Link
							key={ele.title}
							href={ele.path}
							className="uppercase font-[600] text-xl relative group pb-1"
						>
							{ele.title}
							<span className="absolute bottom-0 left-0 w-0 h-[2px]  duration-200 bg-[#e39083] group-hover:w-full"></span>
						</Link>
					);
				})}
			</ul>
			<ul className="flex justify-center mt-12 gap-4">
				{socialArray.map((ele, index) => {
					return (
						<li
							key={index}
							className="bg-white flex items-center justify-center p-4 cursor-pointer"
						>
							{ele}
						</li>
					);
				})}
			</ul>
			<div className="bg-black w-full text-white text-center py-10 mt-12 px-4">
				Copyright © 2024 T-Shirts Store | Powered by T-Shirts Store
			</div>
		</section>
	);
};

export default Footer;

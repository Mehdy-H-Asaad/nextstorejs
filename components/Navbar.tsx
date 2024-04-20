"use client";
import Image from "next/image";
import Logo from "@/Public/Assets/imgs/logo-regular.png";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const navLinks = [
	{ title: "home", path: "/" },
	{ title: "about", path: "/about" },
	{ title: "contact", path: "/contact" },
];

const Navbar = () => {
	const cartItem = useSelector((state: RootState) => state.cartItems.cart);
	const [isVisible, setIsvisible] = useState<boolean>(false);
	const [isCartShown, setIsCartShown] = useState<boolean>(false);

	const handleClick = () => {
		setIsvisible(!isVisible);
	};

	const handleCartClick = () => {
		setIsCartShown(!isCartShown);
	};

	return (
		<main className="h-[140px] flex items-center">
			<div className="container mx-auto px-8 flex items-center justify-between">
				<Image src={Logo} width={100} alt="Logo" />
				<IoIosMenu
					cursor="pointer"
					size={30}
					className="block md:hidden"
					onClick={handleClick}
				/>
				<ul className="hidden gap-8 items-center md:flex">
					{navLinks.map(ele => {
						return (
							<Link
								className="uppercase font-[600] relative text-xl group "
								href={ele.path}
								key={ele.title}
							>
								{ele.title}
								<span className="absolute bottom-0 left-0 w-0 h-[2px]  duration-200 bg-[#e39083] group-hover:w-full"></span>
							</Link>
						);
					})}
					<div className="relative">
						<FaCartShopping
							size={22}
							onClick={handleCartClick}
							cursor="pointer"
						/>
						<span className="absolute -top-[10px] -right-[16px] font-[600] bg-[#e39083] size-4 text-black rounded-[50%] flex items-center justify-center p-[12px] ">
							{cartItem.length}
						</span>
					</div>
				</ul>
			</div>

			<ul
				className={`${
					isVisible
						? "flex flex-col transition-all duration-[0.5s] ease-in-out bg-black fixed top-0 left-0 gap-10 h-screen py-20 px-10 w-80"
						: "flex flex-col transition-all duration-[0.5s] ease-linear bg-black fixed top-0 -left-full gap-10 h-screen py-20 px-10 w-80"
				}`}
			>
				{navLinks.map(ele => {
					return (
						<Link
							className="uppercase font-[600] relative pb-1 text-xl group text-white "
							href={ele.path}
							key={ele.title}
						>
							{ele.title}
							<span className="absolute bottom-0 left-0 w-0 h-[2px]  duration-200 bg-[#e39083] group-hover:w-full"></span>
						</Link>
					);
				})}
				<div className="relative w-fit">
					<FaCartShopping
						size={22}
						onClick={handleCartClick}
						cursor="pointer"
						color="white"
					/>
					<span className="absolute -top-[10px] -right-[16px] font-[600] bg-[#e39083] size-4 text-black rounded-[50%] flex items-center justify-center p-[12px] ">
						{cartItem.length}
					</span>
				</div>
			</ul>
			{isCartShown && (
				<CartList isCartShown={isCartShown} handleCartClick={handleCartClick} />
			)}
		</main>
	);
};

export default Navbar;

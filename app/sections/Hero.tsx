import Image from "next/image";
import React from "react";
import HeroBackground from "@/Public/Assets/imgs/undraw_web_shopping_re_owap.svg";
const Hero = () => {
	return (
		<section className="flex h-[calc(100vh-140px)]">
			<div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between">
				<div>
					<h1 className=" font-bold uppercase text-4xl md:text-5xl text-center lg:text-left ">
						Slick. <span className="text-[#e39083]">Modern.</span> Awesome.
					</h1>
					<p className="text-gray-500 mt-4 text-center lg:text-left lg:max-w-[400px] xl:max-w-[700px]">
						Welcome to our store - your destination for luxury fashion and
						lifestyle. Explore curated collections of designer apparel,
						accessories, and home decor. Elevate your style with ease.
					</p>
				</div>
				<Image
					src={HeroBackground}
					alt="BackgroundImage"
					className="w-[450px] mt-10"
				/>
			</div>
		</section>
	);
};

export default Hero;

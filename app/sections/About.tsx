"use client";
import Image from "next/image";
import AboutBg from "@/Public/Assets/imgs/bg-02.jpg";
import { motion } from "framer-motion";
const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
		>
			<div className="mt-20 mb-10 text-center">
				<h1 className="font-bold text-3xl uppercase">How it Started</h1>
				<p className="text-gray-500 max-w-[500px] mx-auto mt-1 text-sm">
					Discover curated luxury at our boutique, where elegance meets style
					effortlessly
				</p>
			</div>
			<div className="container mx-auto px-6 grid xl:grid-cols-2 ">
				<div className="bg-[#faedeb] p-10">
					<h1 className="font-bold text-[30px] max-w-[400px]">
						Vel mauris molestie dignissim
					</h1>
					<p className="text-gray-500 mt-10">
						Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet
						faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet
						vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus
						sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia
						ex quis faucibus tempor. Sed feugia.
					</p>
				</div>
				<Image src={AboutBg} alt="AboutImg" className="w-full" />
			</div>
		</motion.section>
	);
};

export default About;

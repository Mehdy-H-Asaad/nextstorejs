"use client";
import { motion } from "framer-motion";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Products from "./sections/Products";
export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
		>
			<Hero />
			<Intro />
			<Products />
			<About />
		</motion.div>
	);
}

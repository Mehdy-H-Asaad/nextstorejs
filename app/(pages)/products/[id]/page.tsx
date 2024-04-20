"use client";
import { getProducts } from "@/helpers/getProducts";
import { addToCart, updateQuantity } from "@/redux/CartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type paramsProps = {
	params: {
		id: string;
	};
};

const page = ({ params }: paramsProps) => {
	const products = useSelector((state: RootState) => state.products.products);
	const dispatch = useDispatch<AppDispatch>();
	const [quantityInput, setQuantityInput] = useState<number>(1);

	const handleChange = (e: any) => {
		setQuantityInput(e.target.value);
	};

	const foundedItem = params.id
		? products.find(ele => ele.id === parseInt(params.id))
		: undefined;

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
			className="mt-20"
		>
			{foundedItem && (
				<div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-32 ">
					<Image
						src={foundedItem.image}
						width={300}
						height={200}
						alt="ProductImg"
					/>
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.5,
						}}
						className="ml-10"
					>
						<h1 className="font-bold text-2xl max-w-[500px]">
							{foundedItem.title}
						</h1>
						<span className="font-[600] text-lg">{foundedItem.price}$</span>
						<p className="max-w-[500px] text-gray-500 my-2">
							{foundedItem.description}
						</p>
						<div className="flex flex-col mt-6">
							<label className="font-[600] mb-2">Quantity:</label>
							<input
								type="number"
								className="border-[#dddddd] border-[1px] outline-none mb-4 px-4 rounded-full h-[35px] w-1/2"
								value={quantityInput}
								onChange={handleChange}
							/>
						</div>
						<div className="flex mt-10">
							<button
								className="bg-black p-4 uppercase font-bold text-white"
								onClick={() =>
									dispatch(
										addToCart({
											id: foundedItem.id,
											image: foundedItem.image,
											price: foundedItem.price,
											title: foundedItem.title,
											quantity: quantityInput,
										})
									)
								}
							>
								Add to cart
							</button>
							<button
								onClick={() =>
									dispatch(
										updateQuantity({
											id: foundedItem.id,
											image: foundedItem.image,
											price: foundedItem.price,
											title: foundedItem.title,
											quantity: quantityInput,
										})
									)
								}
								className="bg-[#faedeb] p-4 uppercase font-bold ml-4 text-black"
							>
								update quantity
							</button>
						</div>
					</motion.div>
				</div>
			)}
		</motion.section>
	);
};

export default page;

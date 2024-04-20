"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { getProducts } from "@/helpers/getProducts";
import ProductCard from "@/components/ProductCard";
const Products = () => {
	const products = useSelector((state: RootState) => state.products.products);
	const dispatch = useDispatch<AppDispatch>();
	const isLoading = useSelector((state: RootState) => state.products.loading);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (isLoading)
		return (
			<div className="text-center font-bold text-red-600 text-2xl">
				Fetching Products...
			</div>
		);

	return (
		<section>
			<div className="text-center">
				<h6 className="text-[#00000099] capitalize">our collection</h6>
				<h1 className="font-bold mt-1 capitalize text-3xl tracking-widest">
					best sellers
				</h1>
			</div>
			<div className="container mx-auto px-6 mt-8">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
					{products.slice(0, 5).map(ele => {
						return <ProductCard quantity={1} key={ele.id} {...ele} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Products;

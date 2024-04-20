import { addToCart } from "@/redux/CartSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";

type productCardProps = {
	id: number;
	title: string;
	image: string;
	price: number;
	quantity: number;
};

const ProductCard = ({ id, title, image, price }: productCardProps) => {
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div className="mb-6 ">
			<Link href={`/products/${id}`}>
				<Image
					className="mx-auto min-h-[250px] object-contain duration-300 cursor-pointer hover:scale-110"
					src={image}
					height={100}
					width={100}
					alt="Img"
				/>
			</Link>
			<div className="flex justify-between">
				<div>
					<h3 className="whitespace-nowrap text-ellipsis overflow-hidden max-w-36 xl:max-w-52">
						{title}
					</h3>
					<span className="font-bold text-lg mt-2 block text-[#e39083]">
						{price}$
					</span>
				</div>
				<FaCartShopping
					size={22}
					className="duration-200 hover:text-[#e39083] cursor-pointer"
					onClick={() =>
						dispatch(addToCart({ id, image, price, quantity: 1, title }))
					}
				/>
			</div>
		</div>
	);
};

export default ProductCard;

import { cartProps, removeFromCart } from "@/redux/CartSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";

const CartItemCard = ({ id, image, title, price, quantity }: cartProps) => {
	const dispatch = useDispatch<AppDispatch>();
	return (
		<li className="flex py-6">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<Image
					src={image}
					alt="Salmon orange fabric pouch with match zipper, #342626 zipper pull, and adjustable hip belt."
					className="h-full w-full object-cover object-center "
					height={100}
					width={100}
				/>
			</div>
			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>{title}</h3>
						<p className="ml-4 font-bold">{price}$</p>
					</div>
				</div>
				<div className="flex flex-1 items-end justify-between text-sm">
					<p className="text-gray-500">Quantity: {quantity}</p>
					<div className="flex">
						<button
							onClick={() =>
								dispatch(removeFromCart({ id, image, price, quantity, title }))
							}
							type="button"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItemCard;

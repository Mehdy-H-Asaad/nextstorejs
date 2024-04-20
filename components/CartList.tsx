"use client";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { RootState } from "@/redux/store";

const CartList = ({
	handleCartClick,
	isCartShown,
}: {
	handleCartClick: () => void;
	isCartShown: boolean;
}) => {
	const cartItems = useSelector((state: RootState) => state.cartItems.cart);

	const totalPrice = cartItems.reduce((acc, item) => {
		return (acc += item.price * item.quantity);
	}, 0);

	return (
		<section>
			{isCartShown && (
				<div
					className="relative z-10"
					aria-labelledby="slide-over-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full md:pl-10">
								<div className="pointer-events-auto w-screen md:max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											<div className="flex justify-between items-center">
												<h2
													className=" text-gray-900 font-bold text-2xl"
													id="slide-over-title"
												>
													Shopping cart
												</h2>
												<div>
													<IoMdClose
														size={24}
														cursor="pointer"
														onClick={handleCartClick}
													/>
												</div>
											</div>
											{!cartItems.length ? (
												<div className="font-bold mt-4 text-red-600 text-xl capitalize">
													The cart is empty
												</div>
											) : (
												<div className="mt-8">
													<div className="flow-root">
														<ul
															role="list"
															className="-my-6 divide-y divide-gray-200"
														>
															{cartItems.map(ele => {
																return <CartItemCard key={ele.id} {...ele} />;
															})}
														</ul>
													</div>
												</div>
											)}
										</div>
										<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Subtotal</p>
												<p>{totalPrice}$</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">
												Shipping and taxes calculated at checkout.
											</p>
											<div className="mt-6">
												<a
													href="#"
													className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
												>
													Checkout
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default CartList;

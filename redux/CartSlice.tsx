import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartProps = {
	id: number;
	title: string;
	image: string;
	price: number;
	quantity: number;
};

type initialStateProps = {
	cart: cartProps[];
};

const initialState: initialStateProps = {
	cart: [],
};

export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<cartProps>) => {
			if (state.cart.find(item => item.id === action.payload.id) == null) {
				state.cart.push({
					...action.payload,
					quantity: action.payload.quantity,
				});
			}
		},
		removeFromCart: (state, action: PayloadAction<cartProps>) => {
			state.cart = state.cart.filter(ele => ele.id !== action.payload.id);
		},
		updateQuantity: (state, action: PayloadAction<cartProps>) => {
			const foundItem = state.cart.find(ele => ele.id === action.payload.id);
			if (foundItem) {
				foundItem.quantity = action.payload.quantity;
			}
		},
	},
});

export default CartSlice.reducer;
export const { removeFromCart, addToCart, updateQuantity } = CartSlice.actions;

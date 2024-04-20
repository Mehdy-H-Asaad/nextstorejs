import { getProducts } from "@/helpers/getProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type productsProps = {
	id: number;
	title: string;
	price: number;
	image: string;
	description?: string;
};

type initialStateProps = {
	products: productsProps[];
	loading: boolean;
};
const initialState: initialStateProps = {
	products: [],
	loading: false,
};

export const ProductsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getProducts.pending, state => {
			state.loading = true;
		});
		builder.addCase(
			getProducts.fulfilled,
			(state, action: PayloadAction<productsProps[]>) => {
				state.products = action.payload;
				state.loading = false;
			}
		);
	},
});

export default ProductsSlice.reducer;

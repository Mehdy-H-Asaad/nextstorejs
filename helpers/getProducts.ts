import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async () => {
		const res = await fetch("https://fakestoreapi.com/products");
		const data = await res.json();
		return data;
	}
);

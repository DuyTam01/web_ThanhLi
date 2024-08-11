import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState={
    products:[],
    currentPage:1,
    totalPage:5,
    status:"start",
    error:null
}

const url = "https://66a07b197053166bcabb88dd.mockapi.io/products"

export const fetchProduct = createAsyncThunk("products/fetchProduct", async(page)=>{
    const res = await axios.get(`${url}?page=${page}&&limit=12`)
    // console.log(res.data)
    return res.data
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (productId) => {
    await axios.delete(`${url}/${productId}`);
    return productId; // Trả về productId để có thể cập nhật state
});


const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending, state=>{
            state.status="loading"
        })

        .addCase(deleteProduct.fulfilled, (state, action) => {
            // Cập nhật state để loại bỏ sản phẩm đã xóa
            state.items = state.items.filter(item => item.id !== action.payload);
        })

        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status="start"
            state.products=action.payload
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})
export default productsSlice.reducer
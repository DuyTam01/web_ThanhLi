import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items: [],
        status:'start',
        error: null
    },
    reducers:{
        addItem:(state, action)=>{
            const newItem = action.payload
            
            const index = state.items.findIndex((x)=>x.id === newItem.id)
            if (index>=0){
                state.items[index].quality += newItem.quality
            }
            else {
                state=state.items.push(newItem) 
                // state.items=[...state.items,newItem]
            }

        },
        removeItem:(state, action)=>{
            state.items = state.items.filter(cart => cart.id !== action.payload)
        },
        clearItem:(state, action)=>{
            state.items = []
        },
        setLoading:(state, action)=>{
            state.items = "loading..."
        },
        setError:(state, action)=>{
            state.items = 'failed'
            state.error = action.payload
        },
        setLoaded:(state, action)=>{
            state.items = "seccess"
        }
    }
})
export const {addItem, removeItem, clearItem, setError, setLoading, setLoaded } =cartSlice.actions;
export default cartSlice.reducer;
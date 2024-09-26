import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        //actions are provided inside reducers, logic to update the state
        addtocart: (state, action) => {
            state.push(action.payload)
        },
        //to remove item from cart
        removeFromcart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    
}
})
export const {addtocart,removeFromcart,emptyCart}=cartSlice.actions;
export default cartSlice.reducer;
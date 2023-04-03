import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.findIndex((item) => item.id === action.payload.id)
            if (item >= 0) {
                state.products[item].quantity += 1;
            } else {
                const addedProduct = {...action.payload, quantity: 1}
                state.products.push(addedProduct);
            }
        },

        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },
        resetCart: (state) => {
            state.products = []
        },
        decreaseCart(state, action) {
            const item = state.products.findIndex((item) => item.id === action.payload.id)
            if (state.products[item].quantity > 1) {
                state.products[item].quantity -= 1;
            } else if (state.products[item].quantity === 1) {
                state.products = state.products.filter(item => item.id !== action.payload)
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const {addToCart, removeItem, resetCart, decreaseCart} = cartSlice.actions;

export default cartSlice.reducer
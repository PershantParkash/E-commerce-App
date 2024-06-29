import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/images/camera.jpg";
import product2 from "../assets/images/camera_lens.png";
const initialState = {
    product: [
        {
            id: "01",
            name: "Camera",
            description: "Description for Camera",
            price: 399,
            img: product1,
            quantity: 1
         },
        {
            id: "02",
            name: "Camera Lens",
            description: "Description for Camera Lens",
            price: 199,
            img: product2,
            quantity: 1
        }
    ],
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,action) => {
            let exist = state.product.find((item) => item.id === action.payload.id);
            if(exist){
                exist.quantity += 1;
            }else{
            state.product.push(action.payload);
        }},
        removeFromCart : (state,action) => {
            let exist = state.product.find((item) => item.id === action.payload.id);
            if(exist.quantity >= 2){
                exist.quantity -= 1;
            }else{
            state.product = state.product.filter(item => item.id !== action.payload.id);
            state.selectedItemPrice -= action.payload.price
        }}
    }
})

export const { addToCart,removeFromCart } = cartSlice.actions
export default cartSlice.reducer
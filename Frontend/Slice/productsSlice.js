import { createSlice } from '@reduxjs/toolkit';
import product2 from '../assets/images/camera_lens.jpg';
import product1 from '../assets/images/camera.jpg';
import product3 from '../assets/images/watch.png';

const initialState = {
  products: [
    {
      id: "01",
      name: "Camera",
      description: "Description for Camera",
      price: 399,
      img: product1,
    },
    {
      id: "02",
      name: "Camera Lens",
      description: "Description for Camera Lens",
      price: 199,
      img: product2,
    },
    {
      id: "03",
      name: "Watch",
      description: "Description for watch",
      price: 119,
      img: product3,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;

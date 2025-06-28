import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Theme/themeSlice';
import productReducer from '../Redux/Products/productSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        products: productReducer,
    },
    });
export default store;
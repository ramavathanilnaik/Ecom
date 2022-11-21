import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
})

export default store;
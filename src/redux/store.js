import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./rockets/postSlice";

export const store = configureStore({
    reducer: {
        post: postSlice
    }
})

import { configureStore } from "@reduxjs/toolkit";
import postSlices from "../feetures/posts/postSlices";
import userSlice from "../feetures/users/userSlice";
export const store = configureStore({
    reducer:{
         posts: postSlices,
         users: userSlice,
    }
})
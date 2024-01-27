import { configureStore } from "@reduxjs/toolkit";
import userData from "./slices/userData";

const store = configureStore({
    reducer:{
    userData
    }
});

export default store
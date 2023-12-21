import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo.js";

const store = configureStore({
    reducer:{
        todo: todoReducer
    }
})

export default store;
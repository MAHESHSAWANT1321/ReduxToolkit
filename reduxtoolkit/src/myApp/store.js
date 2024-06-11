import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from @reduxjs/toolkit
import todoReducer from '../features/todo/todoSlice'; // Importing the todoReducer from the todoSlice file

export const store = configureStore({
    reducer: todoReducer // Configuring the store to use the todoReducer for managing the state
});

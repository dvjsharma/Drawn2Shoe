import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './reducers/themeReducer';


export const store = configureStore({
    reducer: {
        // reducers
        theme: themeReducer,
    },
});
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from './reducers/themeReducer';


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    auth:authReducer,
    theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})
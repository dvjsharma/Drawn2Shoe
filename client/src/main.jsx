import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
       
            <PersistGate persistor={persistor}>
                <App />
                <Toaster />
            </PersistGate>
        
    </Provider>
);

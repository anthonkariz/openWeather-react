import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import {openWeather} from './openWeather' ;

export const store = configureStore({
    reducer:{
        [openWeather.reducerPath]:openWeather.reducer,

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(openWeather.middleware)
})
setupListeners(store.dispatch)
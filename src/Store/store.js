import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from './slices/hotels'

const store = configureStore({
    reducer:{
        hotels:hotelsReducer
    }
})

export default store
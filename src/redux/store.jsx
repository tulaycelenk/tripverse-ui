import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice';
import tourReducer from '../redux/slices/tourSlice';
import basketReducer from '../redux/slices/basketSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        tour: tourReducer,
        basket: basketReducer,
    },
})
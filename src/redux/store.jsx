import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice';
import tourReducer from '../redux/slices/tourSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        tour: tourReducer
    },
})
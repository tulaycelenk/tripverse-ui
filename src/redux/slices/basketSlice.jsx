import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    tourIds: []
}

const BASE_URL = "http://localhost:8080";

// export const getAllTours = createAsyncThunk("getAllTours", async () => {
//     const response = await axios.get(`${BASE_URL}/tour/all`);
//     return response.data;
// })

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addTourToBasket: (state, action) => {
            state.tourIds.push(action.payload)
        },
        removeTourToBasket: (state, action) => {
            state.tourIds.pop(action.payload)
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(getAllTours.fulfilled, (state, action) => {
    //         state.tours = action.payload.tours;
    //     })
    // }
})


export const {addTourToBasket, removeTourToBasket } = basketSlice.actions

export default basketSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tours: [{
        id: 1,
        name: "Italy",
        price: 12345.99,
        isAdult: true,
        startTime: null,
        endTime: null,
        description: "pisa,venice,rome,florence",
        point: 4.9
    }, {
        id: 2,
        name: "France",
        price: 15432.99,
        isAdult: true,
        startTime: null,
        endTime: null,
        description: "paris, st. something",
        point: 4.4
    },]
}

export const tourSlice = createSlice({
    name: "tour",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})


export const { } = tourSlice.actions

export default tourSlice.reducer
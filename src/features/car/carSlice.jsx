import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars:["MoDel S", "Model 3", "Model X", "Model Y" , "Solor Roof", "Solor Panels"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer
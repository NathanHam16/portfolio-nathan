'use client';

import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    point: number;

}

const initialState: UserState = {
    point: 1000,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        pointReduce: (state, action) => { state.point -= action.payload },
        pointIncrease: (state, action) => { state.point += action.payload }
    }
})

export const {pointIncrease, pointReduce} = userSlice.actions;

export default userSlice.reducer;
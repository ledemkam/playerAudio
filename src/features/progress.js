import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    current: 0,
    totalDuration: 0
}

export const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
         fillDurationVariables: (state, {payload}) => {
           state.current = payload.currentTime
           state.totalDuration = payload.totalDuration
         },
         updateProgress: (state, {payload}) => {
            state.current = payload
         }
    }
})

export const { fillDurationVariables, updateProgress } = progressSlice.actions
export default progressSlice.reducer
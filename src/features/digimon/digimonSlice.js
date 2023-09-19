import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    digimons: [],
    index: 0
}

export const digimonsSlice = createSlice({
    name:'digimons',
    initialState,
    reducers: {
        addDigimon: (state, action) => {
            state.digimons.push(action.payload)
        },
        changeIndex: (state, action) => {
            state.index = action.payload
        }
    }
})

export const { addDigimon, changeIndex } = digimonsSlice.actions
export default digimonsSlice.reducer
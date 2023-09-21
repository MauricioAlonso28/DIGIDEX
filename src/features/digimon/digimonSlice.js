import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    digimons: [],
    digimonsAdded: [],
    index: 0,
    newIndex: 1423,
    xAntibody: [false, true],
    levels: [
        {
            id: '', 
            level: ''
        }
    ],
    attributes: [
        {
            id: '', 
            attribute: ''
        }
    ],
    types: [
        {
            id: '', 
            type: ''
        }
    ],
    skills: [
        {
            id: '', 
            skill: ''
        }
    ],
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
        },
        addNewDigimon: (state, action) => {
            state.digimonsAdded.push(action.payload)
            state.newIndex = state.newIndex + 1
        },
        addLevels: (state, action) => {
            state.levels.push(action.payload)
        },
        addAttributes: (state, action) => {
            state.attributes.push(action.payload)
        },
        addTypes: (state, action) => {
            state.types.push(action.payload)
        },
        addSkills: (state, action) => {
            state.skills.push(action.payload)
        },
    }
})

export const { addDigimon, changeIndex, addNewDigimon, addLevels, addAttributes, addTypes, addSkills } = digimonsSlice.actions
export default digimonsSlice.reducer
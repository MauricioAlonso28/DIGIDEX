import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myFavorites: [],
}


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFav: (state, action) => {
            state.myFavorites.push(action.payload)
        },
        deleteFav: (state, action) => {
            const newCharacters = state.myFavorites.filter((fav) => fav.id !== action.payload.id)

            state.myFavorites = [...newCharacters]
        }
    }
})

export const { addFav, deleteFav } = favoritesSlice.actions
export default favoritesSlice.reducer
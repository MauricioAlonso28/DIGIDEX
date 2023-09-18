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
        },
        orderFav: (state, action) => {
            const newOrder = state.myFavorites.slice().sort((a, b) => {
                if (action.payload === "asc") {
                    return a.id - b.id;
                } else if (action.payload === "desc") {
                    return b.id - a.id;
                }
                return 0;
            });
            
            return {
                ...state,
                myFavorites: [...newOrder],
            };
        }
    }
})

export const { addFav, deleteFav, orderFav } = favoritesSlice.actions
export default favoritesSlice.reducer
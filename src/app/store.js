import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from '../features/fav/favSlice'
import digimonsSlice from '../features/digimon/digimonSlice'

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        digimons: digimonsSlice
    }
})



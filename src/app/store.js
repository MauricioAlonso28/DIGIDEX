import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from '../features/fav/favSlice'

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice
    }
})



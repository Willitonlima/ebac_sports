import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './cartSlice'

interface FavoritesState {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.items.findIndex((p) => p.id === produto.id)
      if (index !== -1) {
        state.items.splice(index, 1)
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
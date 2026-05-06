import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.items.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(produto)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
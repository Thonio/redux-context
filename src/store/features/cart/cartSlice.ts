import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartStateType, DataOptionalType } from "../../../type";

const initialState: CartStateType = {
  item: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<DataOptionalType>) => {
      const inCart = state.item.find((item) => item.id === action.payload.id)

      if (inCart) {
        inCart.stock = !inCart.stock ? 1 : inCart.stock + 1
      } else {
        state.item.push({
          ...action.payload,
          stock: 1
        })
      }

      state.total += !action.payload.price ? 0 : action.payload.price
    },

    removeCart: (state, action: PayloadAction<DataOptionalType>) => {
      const itemIndex = state.item.findIndex((item) => item.id === action.payload.id)

      if (itemIndex !== -1) {
        const item = state.item[itemIndex]
        state.total -= !item.price ? 0 : item.price

        if (item.stock && item.stock > 1) {
          item.stock -= 1
        } else {
          state.item.splice(itemIndex, 1)
        }
      }
    },

    clearCart: (state) => {
      state.item = []
      state.total = 0
    }
  }
})

export const { addCart, removeCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

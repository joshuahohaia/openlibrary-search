import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@app/store'

interface SearchState {
  query: string
  isOpen: boolean
  activeIndex: number
  offset: number
}

const initialState: SearchState = {
  query: '',
  isOpen: false,
  activeIndex: -1,
  offset: 0,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
      state.activeIndex = -1
      state.offset = 0
      if (action.payload.length >= 3) {
        state.isOpen = true
      }
    },
    openDropdown: (state) => {
      if (state.query.length >= 3) {
        state.isOpen = true
      }
    },
    closeDropdown: (state) => {
      state.isOpen = false
      state.activeIndex = -1
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload
    },
    moveActiveIndex: (state, action: PayloadAction<'up' | 'down'>) => {
      if (action.payload === 'down') {
        state.activeIndex = state.activeIndex + 1
      } else if (state.activeIndex > 0) {
        state.activeIndex = state.activeIndex - 1
      }
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload
    },
    resetSearch: () => initialState,
  },
})

export const {
  setQuery,
  openDropdown,
  closeDropdown,
  setActiveIndex,
  moveActiveIndex,
  setOffset,
  resetSearch,
} = searchSlice.actions

export const selectQuery = (state: RootState) => state.search.query
export const selectIsOpen = (state: RootState) => state.search.isOpen
export const selectActiveIndex = (state: RootState) => state.search.activeIndex
export const selectOffset = (state: RootState) => state.search.offset

export default searchSlice.reducer

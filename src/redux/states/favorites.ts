import { Person } from "@/models";
import { localStorageTypes } from "@/models/localStorage";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [] 

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(localStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (_, action) => {
      console.log('action', action)
      setLocalStorage(localStorageTypes.FAVORITES, action.payload)
      return action.payload
    },
    removeFavorite: (state, action) => {
      const filterState = current(state).filter((p: Person) => Number(p.id) !== Number(action.payload.id))
      setLocalStorage(localStorageTypes.FAVORITES, filterState)
      return filterState
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
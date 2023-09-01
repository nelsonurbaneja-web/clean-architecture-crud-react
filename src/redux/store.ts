import { Person } from "@/models";
import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice } from "./states/favorites";
import { peopleSlice } from "./states/people";

export interface AppStore {
  people: Person[]
  favorites: Person[]
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
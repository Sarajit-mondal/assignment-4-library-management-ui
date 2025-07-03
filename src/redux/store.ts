import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlice'
import { LibraryApi } from '@/api/LibraryApi'
// ...

export const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,

    [LibraryApi.reducerPath] : LibraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LibraryApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
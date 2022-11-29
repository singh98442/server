import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feature/slices/HeaderSlice'
import { getallblogAPI } from './slices/GetallBlock'
import { setupListeners } from '@reduxjs/toolkit/query'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        [getallblogAPI.reducerPath]: getallblogAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getallblogAPI.middleware)
})

setupListeners(store.dispatch)
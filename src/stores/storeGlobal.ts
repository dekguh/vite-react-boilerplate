import { configureStore } from '@reduxjs/toolkit'

import authSlice from '@/features/auth/stores/authSlice'
import { apiSlice } from '@/features/api/stores/apiSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
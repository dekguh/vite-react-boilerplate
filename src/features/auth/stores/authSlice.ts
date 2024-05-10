import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IAuthState } from './typed'

import { RootState } from '@/stores/storeGlobal'

const initialState : IAuthState = {
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const { updateIsLogged } = authSlice.actions
export  const authSelect = (state: RootState) => state.auth
export default authSlice.reducer
import { apiSlice } from '@/features/api/stores/apiSlice'
import { ISignInParams, ISignInResult } from './typed'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSignIn: builder.mutation<ISignInResult, ISignInParams>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      })
    })
  }),
})

export const { usePostSignInMutation } = authApi
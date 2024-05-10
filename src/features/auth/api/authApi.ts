import { ISignInParams, ISignInResult } from './typed'

import { apiSlice } from '@/features/api/stores/apiSlice'

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
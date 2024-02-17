import { baseQueryCustom } from '@/config/baseQueryCustom'
import { createApi } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryCustom,
  endpoints: () => ({}),
})
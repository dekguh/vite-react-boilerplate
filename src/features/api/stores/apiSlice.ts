import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryCustom } from '@/config/baseQueryCustom'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryCustom,
  endpoints: () => ({}),
})
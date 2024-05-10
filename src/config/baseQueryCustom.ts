/**
 * @see https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
 * 
 */

import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

import { updateIsLogged } from '@/features/auth/stores/authSlice'

import { clearStorageJwt } from '@/utils/storage'

import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })

export const baseQueryCustom : BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> 
  = async (args, api, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    // jwt is invalid
    if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          // handle refresh token here
          if ([1].length){
            api.dispatch(updateIsLogged(true))
          } else {
            clearStorageJwt()
            api.dispatch(updateIsLogged(false))
          }
        } finally {
        // release must be called once the mutex should be released again.
          release()
        }
      } else {
      // wait until the mutex is available without locking it
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    }

    return result
  }
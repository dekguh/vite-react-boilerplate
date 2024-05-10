import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/stores/storeGlobal'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
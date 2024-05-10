import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/stores/storeGlobal'

export const useAppDispatch: () => AppDispatch = useDispatch
export const getStorageJwt = () : string => localStorage.getItem('token') ?? ''
export const setStorageJwt = (token : string) => localStorage.setItem('token', token)
export const clearStorageJwt = () => localStorage.removeItem('token')
import instance from './request'

export const login = (params: loginParams) => instance.get('/top2', {params})

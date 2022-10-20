import { AppStateType } from '../store'

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getAuthId = (state: AppStateType) => {
    return state.auth.id
}

export const getCaptchaUrl = (state: AppStateType) => {
    return state.auth.captchaUrl
}
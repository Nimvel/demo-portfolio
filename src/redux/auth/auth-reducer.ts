import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'
import { authAPI, ResultCodeEnum, ResultCodeForCaptcha, securityAPI } from '../../api/api'
import { GetStateType } from '../app-reducer'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

type InitialStateType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}

type ActionsTypes = SetAuthUserDataType | SetCaptchaUrlType

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: {
        id: null | number
        email: null | string
        login: null | string
        isAuth: boolean
    }
}
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean): SetAuthUserDataType =>
    ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    payload: {
        captchaUrl: null | string
    }
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

type DispatchType = Dispatch<ActionsTypes>
export const getAuthUserData = () => async (dispatch : DispatchType, getState: GetStateType) => {
    const data = await authAPI.authMe()
    if (data.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const logIn = ({ email, password, rememberMe, captcha }) => async (dispatch: any, getState: GetStateType) => {
    const data = await authAPI.logIn({ email, password, rememberMe, captcha })
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    }
    else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit('login', { _error: data.messages[0] }))
    }
}

export const getCaptchaUrl = () => async (dispatch: DispatchType, getState: GetStateType) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(data.url))
}

export const logOut = () => async (dispatch: DispatchType, getState: GetStateType) => {
    const data = await authAPI.logOut()
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer
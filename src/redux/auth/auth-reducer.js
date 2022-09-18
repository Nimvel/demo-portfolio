import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
    }
    return state;
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: {captchaUrl} });

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = ({ email, password, rememberMe, captcha }) => async (dispatch) => {
    const data = await authAPI.logIn({ email, password, rememberMe, captcha });
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch(stopSubmit('login', { _error: data.messages[0] }))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url));
}

export const logOut = () => async (dispatch) => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
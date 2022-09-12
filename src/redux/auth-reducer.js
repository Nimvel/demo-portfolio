import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    }
    return state;
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const authMe = () => (dispatch) => {
    return authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const logIn = ({ email, password, rememberMe }) => (dispatch) => {
    return authAPI.logIn({ email, password, rememberMe }).then(data => {
        if (data.resultCode === 0) {
            dispatch(authMe());
        }
        else {
            let message = data.messages ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    })
}

export const logOut = () => (dispatch) => {
    return authAPI.logOut().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;
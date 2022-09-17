import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const logIn = ({ email, password, rememberMe }) => async (dispatch) => {
    const data = await authAPI.logIn({ email, password, rememberMe });
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        let message = data.messages ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logOut = () => async (dispatch) => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
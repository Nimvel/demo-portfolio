import { getAuthUserData } from "./auth/auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
    }
    return state;
}

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())]).then(() => { dispatch(setInitialized()) })
}

export default appReducer;
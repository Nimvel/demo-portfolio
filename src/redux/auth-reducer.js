const SET_USER_DATA = 'SET_USER_DATA';
const SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
    id: null,
    email: null,
    login: null,
    messages: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_MESSAGE:
            return {
                ...state,
                messages: action.messages,
            }
    }
    return state;
}

export const setAuthUserData = ({ id, email, login }) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setMessage = (messages) => ({ type: SET_MESSAGE, messages });

export default authReducer;
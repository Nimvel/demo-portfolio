import { getAuthUserData } from './auth/auth-reducer'

const SET_INITIALIZED = 'app/SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}

const initialState : InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
    }
    return state
}

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = (): SetInitializedType => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch: any) => {
    Promise.all([dispatch(getAuthUserData())]).then(() => { 
        dispatch(setInitialized())
    })
}

export default appReducer
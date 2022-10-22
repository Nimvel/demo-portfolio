import { Dispatch } from 'redux'
import { getAuthUserData } from './auth/auth-reducer'
import { AppStateType } from './store'

const SET_INITIALIZED = 'app/SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}

const initialState= {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType  => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default: return state
    }
}

type ActionsTypes = SetInitializedType

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = (): SetInitializedType => ({ type: SET_INITIALIZED })

export type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

export const initializeApp = () => (dispatch: any, getState: GetStateType) => {
    Promise.all([dispatch(getAuthUserData())]).then(() => { 
        dispatch(setInitialized())
    })
}

export default appReducer
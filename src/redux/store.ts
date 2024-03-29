import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import navigationReducer from './navigation-reducer'
import profileReducer from './profile/profile-reducer'
import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'
import photosReducer from './photos-reducer'
import usersReducer from './users/users-reducer'
import authReducer from './auth/auth-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    navigation: navigationReducer ,
    profile: profileReducer,
    posts: postsReducer,
    dialogs: dialogsReducer,
    photos: photosReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

type RootReducertype = typeof rootReducer
export type AppStateType = ReturnType<RootReducertype>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store

//@ts-ignore
window.store = store
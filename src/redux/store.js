import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import navigationReducer from './navigation-reducer';
import profileReducer from './profile-reducer';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import photosReducer from './photos-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';

let reducers = combineReducers({
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

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

window.store = store;

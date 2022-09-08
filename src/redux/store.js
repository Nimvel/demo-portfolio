import navigationReducer from './navigation-reducer';
import profileReducer from './profile-reducer';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import photosReducer from './photos-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from './users-reducer';
import followReducer from './follow-reducer';

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk' 
import authReducer from './auth-reducer';

let reducers = combineReducers({
    navigationPage: navigationReducer ,
    profilePage: profileReducer,
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    photosPage: photosReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    followButton: followReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

window.store = store;

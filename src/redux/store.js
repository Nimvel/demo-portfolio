import navigationReducer from './navigation-reducer';
import profileReducer from './profile-reducer';
import postsReducer from './posts-reducer';
import dialogsReducer from './dialogs-reducer';
import photosReducer from './photos-reducer';
import usersReducer from './users-reducer';

import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    navigationPage: navigationReducer ,
    profilePage: profileReducer,
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    photosPage: photosReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;

window.store = store;

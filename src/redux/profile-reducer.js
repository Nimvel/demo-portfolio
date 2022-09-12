import { profileAPI } from "../api/api";

let SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';
let SET_AUTH_USER_STATUS = 'SET_AUTH_STATUS';

let SET_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_USER_STATUS';

let initialState = {
    authUserProfileData: null,
    authUserStatus: '',

    profileData: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PROFILE:
            return { ...state, authUserProfileData: action.profile };

        case SET_AUTH_USER_STATUS:
            return { ...state, authUserStatus: action.status };

        case SET_PROFILE:
            return { ...state, profileData: action.profile };

        case SET_STATUS:
            return { ...state, status: action.status };

        default:
            return state;
    }
}

export const setAuthProfile = (profile) => ({ type: SET_AUTH_PROFILE, profile });
export const setAuthUserStatus = (status) => ({ type: SET_AUTH_USER_STATUS, status });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getAuthUserProfile = (userId) => (dispatch) => {
    return profileAPI.getPropfile(userId).then(data => dispatch(setAuthProfile(data)))
}

export const getAuthUserStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then(data => dispatch(setAuthUserStatus(data)))
}

export const getProfile = (userId) => (dispatch) => {
    return profileAPI.getPropfile(userId).then(data => dispatch(setProfile(data)))
}

export const getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
}

export const updateStatus = (status) => (dispatch) => {
    return profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserStatus(data));
        }
    })
}

export default profileReducer;
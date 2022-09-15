import { profileAPI } from "../../api/api";

let SET_AUTH_PROFILE = 'profile/SET_AUTH_PROFILE';
let SET_AUTH_USER_STATUS = 'profile/SET_AUTH_STATUS';

let SET_PROFILE = 'profile/SET_USER_PROFILE';
let SET_STATUS = 'profile/SET_USER_STATUS';

let SET_NEW_PROFILE_PHOTO = 'profile/SET_NEW_PROFILE_PHOTO';

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

        case SET_NEW_PROFILE_PHOTO:
            return { ...state, 
                authUserProfileData: {...state.authUserProfileData, photos: action.photos},
                profileData: {...state.profileData, photos: action.photos},
            };

        default:
            return state;
    }
}

export const setAuthProfile = (profile) => ({ type: SET_AUTH_PROFILE, profile });
export const setAuthUserStatus = (status) => ({ type: SET_AUTH_USER_STATUS, status });

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setNewProfilePhoto = (photos) => ({ type: SET_NEW_PROFILE_PHOTO, photos });

export const getAuthUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getPropfile(userId);
    dispatch(setAuthProfile(data))
}

export const getAuthUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setAuthUserStatus(data))
}

export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getPropfile(userId);
    dispatch(setProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setAuthUserStatus(status));
    }
}

export const saveNewProfilePhoto = (photo) => async (dispatch) => {
    let data = await profileAPI.sevePhoto(photo);
    if (data.resultCode === 0) {
        dispatch(setNewProfilePhoto(data.data.photos));
    }
}

export default profileReducer;
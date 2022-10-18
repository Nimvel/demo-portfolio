import { stopSubmit } from 'redux-form'
import { profileAPI } from '../../api/api'

const SET_AUTH_PROFILE = 'profile/SET_AUTH_PROFILE'
const SET_AUTH_USER_STATUS = 'profile/SET_AUTH_STATUS'

const SET_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_USER_STATUS'

const SET_NEW_PROFILE_PHOTO = 'profile/SET_NEW_PROFILE_PHOTO'

type InitialStateType = {
    authUserProfileData: any,
    authUserStatus: string,

    profileData: any,
    status: string
}
const initialState: InitialStateType = {
    authUserProfileData: null,
    authUserStatus: '',

    profileData: null,
    status: ''
}

const profileReducer = (state = initialState, action: any) => {
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

type SetAuthProfileType = {
    type: typeof SET_AUTH_PROFILE, 
    profile: any
}
export const setAuthProfile = (profile: any): SetAuthProfileType => ({ type: SET_AUTH_PROFILE, profile })

type SetAuthUserStatusType = {
    type: typeof SET_AUTH_USER_STATUS, 
    status: string
}
export const setAuthUserStatus = (status: string): SetAuthUserStatusType => ({ type: SET_AUTH_USER_STATUS, status })

type SetProfileType = {
    type: typeof SET_PROFILE, 
    profile: any
}
export const setProfile = (profile: any): SetProfileType => ({ type: SET_PROFILE, profile })

type SetStatusType = {
    type: typeof SET_STATUS, 
    status: string
}
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status })

type SetNewProfilePhotoType = {
    type: typeof SET_NEW_PROFILE_PHOTO, 
    photos: any
}
export const setNewProfilePhoto = (photos: any): SetNewProfilePhotoType => ({ type: SET_NEW_PROFILE_PHOTO, photos })

export const getAuthUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getPropfile(userId)
    dispatch(setAuthProfile(data))
}

export const getAuthUserStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setAuthUserStatus(data))
}

export const getProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getPropfile(userId)
    dispatch(setProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setAuthUserStatus(status));
    }
}

export const saveNewProfilePhoto = (photo: any) => async (dispatch: any) => {
    const data = await profileAPI.sevePhoto(photo)
    if (data.resultCode === 0) {
        dispatch(setNewProfilePhoto(data.data.photos))
    }
}

export const saveProfileData = (profileData: any) => async (dispatch: any, setState: any) => {
    const userId = setState().auth.id
    const data = await profileAPI.seveProfileData(profileData)
    if (data.resultCode === 0) {
        dispatch(getAuthUserProfile(userId))
    }
    else {
        const errorKey = data.messages[0].substring(30, data.messages[0].length - 1).toLowerCase()
        const errorValue = data.messages[0].substring(0, 18)

        dispatch(stopSubmit('profile', { 'contacts': {[errorKey]: errorValue} }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer
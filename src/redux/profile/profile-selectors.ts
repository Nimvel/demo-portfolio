import { AppStateType } from '../store'

export const getAuthProfileData = (state: AppStateType) => {
    return state.profile.authUserProfileData
}

export const getAuthStatus = (state: AppStateType) => {
    return state.profile.authUserStatus
}

export const getProfileData = (state: AppStateType) => {
    return state.profile.profileData
}

export const getProfileStatus = (state: AppStateType) => {
    return state.profile.status
}

export const getAuthUserId = (state: AppStateType) => {
    return state.auth.id
}
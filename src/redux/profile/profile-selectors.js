export const getAuthProfileData = (state) => {
    return state.profile.authUserProfileData
}

export const getAuthStatus = (state) => {
    return state.profile.authUserStatus
}

export const getProfileData = (state) => {
    return state.profile.profileData
}

export const getProfileStatus = (state) => {
    return state.profile.status
}

export const getAuthUserId = (state) => {
    return state.auth.id
}
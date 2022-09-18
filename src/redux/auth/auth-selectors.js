export const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getAuthId = (state) => {
    return state.auth.id
}

export const getCaptchaUrl = (state) => {
    console.log(state.auth.captchaUrl);
    return state.auth.captchaUrl
}
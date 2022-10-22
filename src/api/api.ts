import axios from 'axios'
import { PhotosType, ProfileDataType } from '../redux/profile/profile-reducer'
import { UserDataType } from '../redux/users/users-reducer'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4'
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type GetUsersResponseType = {
    items: Array<UserDataType>
    totalCount: number
    error: string
}

type FollowResponseType = {
    data : {
        followed: boolean
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getFriends(currentPage = 1, pageSize = 7) {
        return instance.get<GetUsersResponseType>(`users?friend=true&page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId: number) {
        return instance.post<FollowResponseType>(`follow/${userId}`).then(response => response.data)
    },

    unfollow(userId: number) {
        return instance.delete<FollowResponseType>(`follow/${userId}`).then(response => response.data)
    }
}

type LogInType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null | string
}

type AuthMeResponseType = {
    data : {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data : {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(response => response.data)
    },

    logIn({ email, password, rememberMe = false, captcha = null }: LogInType) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
    },

    logOut() {
        return instance.delete<LoginResponseType>(`auth/login`).then(response => response.data)
    }
}

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(response => response.data)
    }
}

type UpdateStatusResponseType = {
    data : {
        status: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type SavePhotoResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type SaveProfileDataResponseType = {
    data : ProfileDataType
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const profileAPI = {
    getPropfile(userId: number) {
        return instance.get<ProfileDataType>(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status`, { status }).then(response => response.data)
    },

    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image: file', photoFile)
        return instance.put<SavePhotoResponseType>(`profile/photo`, formData).then(response => response.data)
    },

    saveProfileData(profileData: ProfileDataType) {
        return instance.put<SaveProfileDataResponseType>(`profile`, profileData).then(response => response.data)
    },
}
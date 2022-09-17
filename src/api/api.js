import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getFriends(currentPage = 1, pageSize = 7) {
        return instance.get(`users?friend=true&page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },

    logIn({ email, password, rememberMe = false }) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    },

    logOut() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const profileAPI = {
    getPropfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status }).then(response => response.data)
    },

    sevePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image: file', photoFile)
        return instance.put(`profile/photo`, formData).then(response => response.data)
    },

    seveProfileData(profileData) {
        return instance.put(`profile`, profileData).then(response => response.data)
    },
}
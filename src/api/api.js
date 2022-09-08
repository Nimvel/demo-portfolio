import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4'
    }})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 7) {
        return instance.get(`users?friend=true&page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}
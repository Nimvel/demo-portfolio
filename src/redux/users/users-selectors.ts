import { AppStateType } from '../store'

export const getUsersData = (state : AppStateType) => {
    return state.users.usersData
}

export const getFriendsData = (state: AppStateType) => {
    return state.users.friendsData
}

export const getUsersCurrentPage = (state : AppStateType) => {
    return state.users.usersCurrentPage
}

export const getFriendsCurrentPage = (state : AppStateType) => {
    return state.users.friendsCurrentPage
}

export const getTotalUsersCount = (state : AppStateType) => {
    return state.users.totalUsersCount
}

export const getTotalFriendsCount = (state : AppStateType) => {
    return state.users.totalFriendsCount
}

export const getSize = (state : AppStateType) => {
    return state.users.size
}

export const getIsFetching = (state : AppStateType) => {
    return state.users.isFetching
}

export const getIsFollowing = (state : AppStateType) => {
    return state.users.isFollowing
}
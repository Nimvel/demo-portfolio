// import { createSelector } from "reselect"

export const getUsersData = (state) => {
    return state.users.usersData
}

// export const getUsersDataSelector = createSelector(getUsersData, (usersData) => {
//     return usersData.filter(u => true)
// })

export const getFriendsData = (state) => {
    return state.users.friendsData
}

export const getUsersCurrentPage = (state) => {
    return state.users.usersCurrentPage
}

export const getFriendsCurrentPage = (state) => {
    return state.users.friendsCurrentPage
}

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
}

export const getTotalFriendsCount = (state) => {
    return state.users.totalFriendsCount
}

export const getSize = (state) => {
    return state.users.size
}

export const getIsFetching = (state) => {
    return state.users.isFetching
}

export const getIsFollowing = (state) => {
    return state.users.isFollowing
}
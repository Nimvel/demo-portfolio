// import { createSelector } from "reselect"

export const getUsersData = (state) => {
    return state.usersPage.usersData
}

// export const getUsersDataSelector = createSelector(getUsersData, (usersData) => {
//     return usersData.filter(u => true)
// })

export const getFriendsData = (state) => {
    return state.usersPage.friendsData
}

export const getUsersCurrentPage = (state) => {
    return state.usersPage.usersCurrentPage
}

export const getFriendsCurrentPage = (state) => {
    return state.usersPage.friendsCurrentPage
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getTotalFriendsCount = (state) => {
    return state.usersPage.totalFriendsCount
}

export const getSize = (state) => {
    return state.usersPage.size
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
import { usersAPI } from '../../api/api'
import { updateObjInState } from '../../helpers'

const SET_USERS = 'users/SET_USERS'
const SET_FRIENDS = 'users/SET_FRIENDS'

const SET_USERS_CURRENT_PAGE = 'users/SET_USERS_CURRENT_PAGE'
const SET_FRIENS_CURRENT_PAGE = 'users/SET_FRIENS_CURRENT_PAGE'

const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const SET_TOTAL_FRIENDS_COUNT = 'users/SET_TOTAL_FRIENDS_COUNT'

const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'

const SET_FOLLOWED = 'users/SET_FOLLOWED'
const FOLLOWING_IN_PROGRESS = 'follow/FOLLOWING_IN_PROGRESS'

export type UserDataType = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string,
    uniqueUrlName: null | number
}

type InitialStateType = {
    usersData: Array<UserDataType>
    friendsData: Array<UserDataType>

    usersCurrentPage: number
    friendsCurrentPage: number

    totalUsersCount: number
    totalFriendsCount: number

    size: number
    isFetching: boolean
    isFollowing: Array<number> //id
}

const initialState = {
    usersData: [],
    friendsData: [],

    usersCurrentPage: 1,
    friendsCurrentPage: 1,

    totalUsersCount: 0,
    totalFriendsCount: 0,

    size: 7,
    isFetching: true,
    isFollowing: []
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, usersData: [...action.users] }

        case SET_FRIENDS:
            return { ...state, friendsData: [...action.friends] }

        case SET_USERS_CURRENT_PAGE:
            return { ...state, usersCurrentPage: action.currentPage }

        case SET_FRIENS_CURRENT_PAGE:
            return { ...state, friendsCurrentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }

        case SET_TOTAL_FRIENDS_COUNT:
            return { ...state, totalFriendsCount: action.count }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case SET_FOLLOWED:
            return {
                ...state,
                usersData: updateObjInState(state.usersData, 'id', action.userId, {followed: action.followed}),
                friendsData: updateObjInState(state.friendsData, 'id', action.userId, {followed: action.followed})
            }

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, isFollowing:
                    action.isFetching
                        ? [...state.isFollowing, action.userId] //если идет загрузка, то добавляем id пользователя, на которого подписываемся
                        : state.isFollowing.filter(i => i != action.userId) //если загрузка завершена, то убираем пользователя, на которого проводилась подписка
            }
    }
    return state
}

type SetUsersType = {
    type: typeof SET_USERS, 
    users: Array<UserDataType>
}
export const setUsers = (users: Array<UserDataType>): SetUsersType => ({ type: SET_USERS, users })

type SetFriendsType = {
    type: typeof SET_FRIENDS, 
    friends: Array<UserDataType>
}
export const setFriends = (friends: Array<UserDataType>): SetFriendsType => ({ type: SET_FRIENDS, friends })

type SetUsersCurrentPageType = {
    type: typeof SET_USERS_CURRENT_PAGE, 
    currentPage: number
}
export const setUsersCurrentPage = (currentPage: number): SetUsersCurrentPageType => ({ type: SET_USERS_CURRENT_PAGE, currentPage })

type SetFriendsCurrentPageType = {
    type: typeof SET_FRIENS_CURRENT_PAGE, 
    currentPage: number
}
export const setFriendsCurrentPage = (currentPage: number): SetFriendsCurrentPageType => ({ type: SET_FRIENS_CURRENT_PAGE, currentPage })

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT, 
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count })

type SetTotalFriendsCountType = {
    type: typeof SET_TOTAL_FRIENDS_COUNT, 
    count: number
}
export const setTotalFriendsCount = (count: number): SetTotalFriendsCountType => ({ type: SET_TOTAL_FRIENDS_COUNT, count })

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING, 
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type SetFollowedType = {
    type: typeof SET_FOLLOWED, 
    userId: number, 
    followed: boolean
}
export const setFollowed = (userId: number, followed: boolean): SetFollowedType => ({ type: SET_FOLLOWED, userId, followed })

type FollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS, 
    userId: number, 
    isFetching: boolean
}
export const followingInProgress = (isFetching: boolean, userId: number): FollowingInProgressType => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId })

export const getUsers = (pageNumber: number, size: number) => async (dispatch: any) => {
    dispatch(setUsersCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(pageNumber, size)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

export const getFriends = (pageNumber: number, size: number) => async (dispatch: any) => {
    dispatch(setFriendsCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getFriends(pageNumber, size)
    dispatch(setFriends(data.items))
    dispatch(setTotalFriendsCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

export const getFollowButton = (param: 'follow' | 'unfollow', userId: number) => async (dispatch: any) => {
    dispatch(followingInProgress(true, userId))

    let data = await usersAPI[param](userId)
    if (data.resultCode === 0) {
        if (param === 'follow') {
            dispatch(setFollowed(userId, true))
        }
        else {
            dispatch(setFollowed(userId, false))
        }
    }
    dispatch(followingInProgress(false, userId))
}

export default usersReducer
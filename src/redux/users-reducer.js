import { usersAPI } from '../api/api';

const SET_USERS = 'SET_USERS';
const SET_FRIENDS = 'SET_FRIENDS';

const SET_USERS_CURRENT_PAGE = 'SET_USERS_CURRENT_PAGE';
const SET_FRIENS_CURRENT_PAGE = 'SET_FRIENS_CURRENT_PAGE';

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const SET_USER_FOLLOWED = 'SET_USER_FOLLOWED';
const SET_FRIEND_FOLLOWED = 'SET_FRIEND_FOLLOWED';

let initialState = {
    usersData: [],
    friendsData: [],

    usersCurrentPage: 1,
    friendsCurrentPage: 1,
    
    totalUsersCount: 0,
    totalFriendsCount: 0,

    size: 7,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
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

        case SET_USER_FOLLOWED:
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: action.followed } : u) }

        case SET_FRIEND_FOLLOWED:
            return { ...state, friendsData: state.friendsData.map(u => u.id === action.userId ? { ...u, followed: action.followed } : u) }
    }
    return state;
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });

export const setUsersCurrentPage = (currentPage) => ({ type: SET_USERS_CURRENT_PAGE, currentPage });
export const setFriendsCurrentPage = (currentPage) => ({ type: SET_FRIENS_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setTotalFriendsCount = (count) => ({ type: SET_TOTAL_FRIENDS_COUNT, count });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setUserFollowed = (userId, followed) => ({ type: SET_USER_FOLLOWED, userId, followed });
export const setFriendFollowed = (userId, followed) => ({ type: SET_FRIEND_FOLLOWED, userId, followed });

export const getUsers = (pageNumber, size) => (dispatch) => {
    dispatch(setUsersCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    return usersAPI.getUsers(pageNumber, size).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
}

export const getFriends = (pageNumber, size) => (dispatch) => {
    dispatch(setFriendsCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    return usersAPI.getFriends(pageNumber, size).then(data => {
            dispatch(setFriends(data.items));
            dispatch(setTotalFriendsCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
}

export default usersReducer;
import { usersAPI } from '../api/api';

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_FOLLOWED = 'SET_USER_FOLLOWED';

let initialState = {
    usersData: [],
    currentPage: 1,
    size: 7,
    count: 0,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, usersData: [...action.users] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USER_COUNT:
            return { ...state, count: action.count }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case SET_USER_FOLLOWED:
            return { ...state, usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: action.followed } : u) }
    }
    return state;
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setUserFollowed = (userId, followed) => ({ type: SET_USER_FOLLOWED, userId, followed });

export const getUsers = (pageNumber, size) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    return usersAPI.getUsers(pageNumber, size).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
}

export default usersReducer;
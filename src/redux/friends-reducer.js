import { usersAPI } from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FRIEND_FOLLOWED = 'SET_FRIEND_FOLLOWED';

let initialState = {
    friendsData: [],
    currentPage: 1,
    size: 7,
    count: 0,
    isFetching: false
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, friendsData: [...action.friends] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_FRIENDS_COUNT:
            return { ...state, count: action.count }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
            
        case SET_FRIEND_FOLLOWED:
            return { ...state, friendsData: state.friendsData.map(u => u.id === action.userId ? { ...u, followed: action.followed } : u) }
    }
    return state;
}

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_FRIENDS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setFriendFollowed = (userId, followed) => ({ type: SET_FRIEND_FOLLOWED, userId, followed });

export const getFriends = (pageNumber, size) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    return usersAPI.getFriends(pageNumber, size).then(data => {
        dispatch(setFriends(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    })
}

export default friendsReducer;
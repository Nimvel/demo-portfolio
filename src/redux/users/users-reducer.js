import { usersAPI } from '../../api/api';
import { updateObjInState } from '../../helpers';

const SET_USERS = 'users/SET_USERS';
const SET_FRIENDS = 'users/SET_FRIENDS';

const SET_USERS_CURRENT_PAGE = 'users/SET_USERS_CURRENT_PAGE';
const SET_FRIENS_CURRENT_PAGE = 'users/SET_FRIENS_CURRENT_PAGE';

const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_TOTAL_FRIENDS_COUNT = 'users/SET_TOTAL_FRIENDS_COUNT';

const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';

const SET_FOLLOWED = 'users/SET_FOLLOWED';

const FOLLOWING_IN_PROGRESS = 'follow/FOLLOWING_IN_PROGRESS';

let initialState = {
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
    return state;
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });

export const setUsersCurrentPage = (currentPage) => ({ type: SET_USERS_CURRENT_PAGE, currentPage });
export const setFriendsCurrentPage = (currentPage) => ({ type: SET_FRIENS_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setTotalFriendsCount = (count) => ({ type: SET_TOTAL_FRIENDS_COUNT, count });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setFollowed = (userId, followed) => ({ type: SET_FOLLOWED, userId, followed });

export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (pageNumber, size) => async (dispatch) => {
    dispatch(setUsersCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, size);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

export const getFriends = (pageNumber, size) => async (dispatch) => {
    dispatch(setFriendsCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getFriends(pageNumber, size);
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

export const getFollowButton = (param, userId) => async (dispatch) => {
    dispatch(followingInProgress(true, userId));

    let data = await usersAPI[param](userId);
    if (data.resultCode === 0) {
        if (param === 'follow') {
            dispatch(setFollowed(userId, true));
        }
        else {
            dispatch(setFollowed(userId, false));
        }
    }
    dispatch(followingInProgress(false, userId));
}

export default usersReducer;
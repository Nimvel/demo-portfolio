const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersData: [ ],
    currentPage: 1,
    size: 7,
    count: 0,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => u.id === action.userId ? { ...u, followed: true } : u )
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => u.id === action.userId ? {...u, followed: false} : u )
            }

        case SET_USERS:
            return { ...state, usersData: [ ...action.users ]}

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USER_COUNT:
            return { ...state, count: action.count }
        
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
    }
    return state;
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
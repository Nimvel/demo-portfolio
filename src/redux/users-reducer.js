// const IS_FOLLOWED = 'IS_FOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    usersData: [],
    currentPage: 1,
    size: 7,
    count: 0,
    isFetching: true,
    // isFollowing: [],

    // userId: null,
    // isFollowed: false,
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

        // case FOLLOW:
        //     return {
        //         ...state,
        //         usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: true } : u)
        //     }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         usersData: state.usersData.map(u => u.id === action.userId ? { ...u, followed: false } : u)
        //     }

        // case FOLLOWING_IN_PROGRESS:
        //     return {
        //         ...state, isFollowing:
        //             action.isFetching
        //                 ? [...state.isFollowing, action.userId] //если идет загрузка, то добавляем id пользователя, на которого подписываемся
        //                 : state.isFollowing.filter(i => i != action.userId) //если загрузка завершена, то убираем пользователя, на которого проводилась подписка
        //     }

        // case IS_FOLLOWED:
        //     return { ...state, usersData: [...action.users] }
    }
    return state;
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

// export const follow = (userId) => ({ type: FOLLOW, userId });
// export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
// export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId });

export default usersReducer;
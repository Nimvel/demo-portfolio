const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FRIEND_FOLLOWED = 'SET_FRIEND_FOLLOWED';
// const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
// const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    friendsData: [],
    currentPage: 1,
    size: 7,
    count: 0,
    isFetching: false,
    // isClean: false

    // isFollowing: []
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

        // case FOLLOWING_IN_PROGRESS:
        //     return {
        //         ...state, isFollowing:
        //             action.isFetching
        //                 ? [...state.isFollowing, action.userId] //если идет загрузка, то добавляем id пользователя, на которого подписываемся
        //                 : state.isFollowing.filter(i => i != action.userId) //если загрузка завершена, то убираем пользователя, на которого проводилась подписка
        //     }

        // case FOLLOW:
        //     return {
        //         ...state,
        //         friendsData: state.friendsData.map(u => u.id === action.userId ? { ...u, followed: true } : u)
        //     }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         friendsData: state.friendsData.map(u => u.id === action.userId ? { ...u, followed: false } : u)
        //     }
    }
    return state;
}

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (count) => ({ type: SET_TOTAL_FRIENDS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setFriendFollowed = (userId, followed) => ({ type: SET_FRIEND_FOLLOWED, userId, followed });
// export const setInitialState = (isClean) => ({ type: SET_INITIAL_STATE, isClean });

// export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId });

// export const follow = (userId) => ({ type: FOLLOW, userId });
// export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export default friendsReducer;
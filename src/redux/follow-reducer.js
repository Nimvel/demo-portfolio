// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    isFollowing: [

    ],
    isFetching: true,
    // isFollowed: false
}

const followReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //         isFollowed: action.userId && true
        //     }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         isFollowed: action.userId && false
        //     }

        // case SET_USERS:
        //     return { ...state, usersData: [ ...action.users ]}

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

// export const follow = (userId) => ({ type: FOLLOW, userId });
// export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsers = (users) => ({ type: SET_USERS, users });
export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId});

export default followReducer;
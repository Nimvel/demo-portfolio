import user from '../assets/icons/comrade.png';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    usersData: [
        { id: 1, userName: 'Kurapika', userImg: user, isFollowed: false },
        { id: 2, userName: 'Lucifer', userImg: user, isFollowed: true },
        { id: 3, userName: 'Ledy Maria', userImg: user, isFollowed: false }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( u => u.id === action.userId ? { ...u, isFollowed: true } : u )
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => u.id === action.userId ? {...u, isFollowed: false} : u )
            }
    }
    return state;
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export default usersReducer;
import { usersAPI } from "../api/api";
import { setFriendFollowed } from "./friends-reducer";
import { setUserFollowed } from "./users-reducer";

const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    isFollowing: [ ],
    isFetching: true,
}

const followReducer = (state = initialState, action) => {
    switch (action.type) {

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

export const followingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId});

export const getFollowButton = (param, userId) => (dispatch) => {
    dispatch(followingInProgress(true, userId));

    return usersAPI[param](userId).then(data => {
        if (param === 'follow') {
            if (data.resultCode === 0) {
                dispatch(setUserFollowed(userId, true));
                dispatch(setFriendFollowed(userId, true));
            }
        }
        else {
            if (data.resultCode === 0) {
                dispatch(setUserFollowed(userId, false));
                dispatch(setFriendFollowed(userId, false));
            }
        }
        dispatch(followingInProgress(false, userId));
    });
}
 
export default followReducer;
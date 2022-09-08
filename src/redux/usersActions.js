// const SET_USERS = 'SET_USERS';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const SET_FOLLOWED = 'SET_FOLLOWED';

// export const usersActions = (state, action) => {
//     switch (action.type) {
//         case SET_USERS:
//             return { ...state, usersData: [...action.users] }

//         case SET_CURRENT_PAGE:
//             return { ...state, currentPage: action.currentPage }

//         case SET_TOTAL_COUNT:
//             return { ...state, count: action.count }

//         case TOGGLE_IS_FETCHING:
//             return { ...state, isFetching: action.isFetching }
            
//         case SET_FOLLOWED:
//             return { ...state, friendsData: state.friendsData.map(u => u.id === action.userId ? { ...u, followed: action.followed } : u) }
//     }
//     return state;
// }

// export const setUsers = (users) => ({ type: SET_USERS, users });
// export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
// export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
// export const setFollowed = (userId, followed) => ({ type: SET_FOLLOWED, userId, followed });
import usersReducer, { setFriends, setFriendsCurrentPage, setTotalFriendsCount, setTotalUsersCount, setUsers, setUsersCurrentPage, toggleIsFetching } from './users-reducer';

let state = {
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

describe('Users Reducer', () => {
    test('array of users must be added', () => {
        let newState = usersReducer(state, setUsers([1, 2]));
        expect(newState.usersData.length).toBe(2);
    });

    test('array of friends must be added', () => {
        let newState = usersReducer(state, setFriends([1]));
        expect(newState.friendsData.length).toBe(1);
    });

    test('current user page must be changed', () => {
        let newState = usersReducer(state, setUsersCurrentPage(3));
        expect(newState.usersCurrentPage).toBe(3);
    });

    test('current friend page must be changed', () => {
        let newState = usersReducer(state, setFriendsCurrentPage(5));
        expect(newState.friendsCurrentPage).toBe(5);
    });

    test('total users count must be added', () => {
        let newState = usersReducer(state, setTotalUsersCount(500));
        expect(newState.totalUsersCount).toBe(500);
    });

    test('total friends count must be added', () => {
        let newState = usersReducer(state, setTotalFriendsCount(20));
        expect(newState.totalFriendsCount).toBe(20);
    });

    test('isFetching must be changed', () => {
        let newState = usersReducer(state, toggleIsFetching(false));
        expect(newState.isFetching).toBe(false);
    });
})
let initialState = {
    navData: [
        { id: 1, name: 'profile' },
        { id: 2, name: 'posts' },
        { id: 3, name: 'dialogs' },
        { id: 4, name: 'friends' },
        { id: 5, name: 'settings' },
        { id: 6, name: 'photos' },
        { id: 7, name: 'users' }
    ]
}

const navigationReducer = (state = initialState, action) => {
    return state;
}

export default navigationReducer;
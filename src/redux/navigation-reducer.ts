type NavDataType = {
    id: number, 
    name: string
}

type InitialStateType = {
    navData: Array<NavDataType>
}

const initialState = {
    navData: [
        { id: 1, name: 'profile' },
        { id: 2, name: 'posts' },
        { id: 3, name: 'photos' },
        { id: 4, name: 'dialogs' },
        { id: 5, name: 'friends' },
        { id: 6, name: 'users' },
        { id: 7, name: 'settings' }
    ]
}

const navigationReducer = (state = initialState, action: any): InitialStateType => {
    return state
}

export default navigationReducer
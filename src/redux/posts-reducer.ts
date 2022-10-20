const kurapika = require('../assets/avatars/kurapika_face.jpg')
const ladyMaria = require('../assets/avatars/lady_Maria_face.jpg')
const lucifer = require('../assets/avatars/lucifer_face.jpg')
const comrade = require('../assets/icons/comrade.png')

const ADD_NEW_POST = 'posts/ADD_NEW_POST'
const LIKE = 'posts/LIKE'

type PostsDataType = {
    id: number
    comradeName: string
    comradeImg: string
    message: string
    likesCount: number
    isLiked: boolean
} 

type InitialStateType = {
    postsData: Array<PostsDataType>
}

const initialState = {
    postsData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
    ]
}

const postsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case ADD_NEW_POST:
            const newPost = { id: 4, comradeName: 'User', comradeImg: comrade, message: action.newPostText, likesCount: 0, isLiked: false }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };

        case LIKE: {
            const stateCopy = { ...state, postsData: [...state.postsData]}
            let idLike
            for (let i = 0; i < stateCopy.postsData.length; i++) {
                if (stateCopy.postsData[i].id === action.id) idLike = i
            }
            if (!stateCopy.postsData[idLike].isLiked) {
                stateCopy.postsData[idLike].likesCount++
                stateCopy.postsData[idLike].isLiked = true
            }
            else {
                stateCopy.postsData[idLike].likesCount--
                stateCopy.postsData[idLike].isLiked = false
            }
            return stateCopy
        }

        default: return state
    }
}

type AddNewPostType = {
    type: typeof ADD_NEW_POST, 
    newPostText: string
}
export const addNewPost = (newPostText: string): AddNewPostType => ({ type: ADD_NEW_POST, newPostText })

type LikeType = {
    type: typeof LIKE, 
    id: number
}
export const like = (id: number): LikeType => ({ type: LIKE, id })

export default postsReducer


import kurapika from '../assets/avatars/kurapika_face.jpg';
import ladyMaria from '../assets/avatars/lady_Maria_face.jpg';
import lucifer from '../assets/avatars/lucifer_face.jpg';
import comrade from '../assets/icons/comrade.png';


let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let LIKE = 'LIKE';

let initialState = {
    postsData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
    ],
    newPostText: '',
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, comradeName: 'User', comradeImg: comrade, message: state.newPostText, likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };

        case LIKE: {
            let stateCopy = { ...state, postsData: [...state.postsData]};
            let idLike;
            for (let i = 0; i < stateCopy.postsData.length; i++) {
                if (stateCopy.postsData[i].id === action.id) idLike = i;
            }
            if (!stateCopy.postsData[idLike].isLiked) {
                stateCopy.postsData[idLike].likesCount++;
                stateCopy.postsData[idLike].isLiked = true;
            }
            else {
                stateCopy.postsData[idLike].likesCount--;
                stateCopy.postsData[idLike].isLiked = false;
            }
            return stateCopy;
        }

        default: return state;
    }
}

export default postsReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text });
export const likeActionCreator = (id) => ({ type: LIKE, id });
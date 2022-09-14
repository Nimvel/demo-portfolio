
import kurapika from '../assets/avatars/kurapika_face.jpg';
import ladyMaria from '../assets/avatars/lady_Maria_face.jpg';
import lucifer from '../assets/avatars/lucifer_face.jpg';
import comrade from '../assets/icons/comrade.png';


const ADD_NEW_POST = 'posts/ADD_NEW_POST';
const LIKE = 'posts/LIKE';

let initialState = {
    postsData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, message: 'The only principle is that there are no principles.', likesCount: 0, isLiked: false },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, message: 'Hm... A visitor? How unexpected...', likesCount: 4, isLiked: false },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, message: 'Are you offering me chocolate pancakes?', likesCount: 9, isLiked: false }
    ]
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_POST:
            let newPost = { id: 4, comradeName: 'User', comradeImg: comrade, message: action.newPostText, likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
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

export const addNewPost = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const like = (id) => ({ type: LIKE, id });

export default postsReducer;

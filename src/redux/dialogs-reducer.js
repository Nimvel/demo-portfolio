import kurapika from '../assets/avatars/kurapika_face.jpg';
import ladyMaria from '../assets/avatars/lady_Maria_face.jpg';
import lucifer from '../assets/avatars/lucifer_face.jpg';

let initialState = {
    comradesData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, comradeId: 1, lastMessage: 'The only principle is ....' },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, comradeId: 2, lastMessage: 'Hm... A visitor?' },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, comradeId: 3, lastMessage: 'Are you offering me...' }
    ],
    messagesData: [
        { id: 1, comradeId: 1, message: 'The only principle is that there are no principles.' },
        { id: 2, comradeId: 2, message: 'Hm... A visitor? How unexpected...' },
        { id: 3, comradeId: 3, message: 'Are you offering me chocolate pancakes?' },
    ],
    newMessageText: '',
}

let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = { id: 4, comradeId: 3, message: state.newMessageText }
            return { 
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return { 
                ...state,
                newMessageText: action.newMessageText
            };

        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });
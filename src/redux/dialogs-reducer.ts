const kurapika = require('../assets/avatars/kurapika_face.jpg')
const ladyMaria = require('../assets/avatars/lady_Maria_face.jpg')
const lucifer = require('../assets/avatars/lucifer_face.jpg')

const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'

type ComradesDataType = {
    id: number
    comradeName: string
    comradeImg: string
    comradeId: number
    lastMessage: string
}

type MessagesDataType = {
    id: number
    comradeId: number
    message: string
}

type InitialStateType = {
    comradesData: Array<ComradesDataType>
    messagesData: Array<MessagesDataType>
}

const initialState = {
    comradesData: [
        { id: 1, comradeName: 'Kurapika', comradeImg: kurapika, comradeId: 1, lastMessage: 'The only principle is ....' },
        { id: 2, comradeName: 'Lady Maria', comradeImg: ladyMaria, comradeId: 2, lastMessage: 'Hm... A visitor?' },
        { id: 3, comradeName: 'Lucifer', comradeImg: lucifer, comradeId: 3, lastMessage: 'Are you offering me...' }
    ],
    messagesData: [
        { id: 1, comradeId: 1, message: 'The only principle is that there are no principles.' },
        { id: 2, comradeId: 2, message: 'Hm... A visitor? How unexpected...' },
        { id: 3, comradeId: 3, message: 'Are you offering me chocolate pancakes?' },
    ]
}

const dialogsReducer = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = { id: 4, comradeId: 3, message: action.newMessageText }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };

        default:
            return state;
    }
}

type SendMessageType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string
}
export const sendMessage = (newMessageText: string): SendMessageType => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer
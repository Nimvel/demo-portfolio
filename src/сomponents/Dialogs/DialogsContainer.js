import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        comradesData: state.dialogsPage.comradesData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)

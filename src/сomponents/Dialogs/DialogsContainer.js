import { connect } from 'react-redux';
import { updateNewMessageText, sendMessage } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        comradesData: state.dialogsPage.comradesData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default withAuthRedirect(connect(mapStateToProps, { updateNewMessageText, sendMessage })(Dialogs))

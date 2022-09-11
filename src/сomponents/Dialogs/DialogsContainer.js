import { connect } from 'react-redux';
import { compose } from 'redux';

import { sendMessage } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        comradesData: state.dialogsPage.comradesData,
        messagesData: state.dialogsPage.messagesData
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs)

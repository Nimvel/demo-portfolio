import { connect } from 'react-redux';
import { compose } from 'redux';

import { sendMessage } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        comradesData: state.dialogs.comradesData,
        messagesData: state.dialogs.messagesData
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs)

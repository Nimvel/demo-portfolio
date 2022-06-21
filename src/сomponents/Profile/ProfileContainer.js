import { connect } from 'react-redux';
import Profile from './Profile';

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData[0]
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

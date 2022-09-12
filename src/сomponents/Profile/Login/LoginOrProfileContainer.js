import React from 'react';
import { connect } from 'react-redux';

import { getAuthUserProfile, getAuthUserStatus, updateStatus } from '../../../redux/profile-reducer';
import { logIn } from '../../../redux/auth-reducer';

import LoginOrProfile from './LoginOrProfile';

class LoginOrProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserProfile(this.props.authUserId);
        this.props.getAuthUserStatus(this.props.authUserId);
    }

    render() {
        return <LoginOrProfile isAuth={this.props.isAuth} 
        profile={this.props.profile} status={this.props.status}
        logIn={this.props.logIn} updateStatus={this.props.updateStatus} getStatus={this.props.getAuthUserStatus} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.profilePage.authUserProfileData,
        status: state.profilePage.authUserStatus,
        authUserId: state.auth.id
    }
}

export default connect(mapStateToProps, { getAuthUserProfile, getAuthUserStatus, updateStatus, logIn })(LoginOrProfileContainer);
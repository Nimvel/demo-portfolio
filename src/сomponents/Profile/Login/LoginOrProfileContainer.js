import React from 'react';
import { connect } from 'react-redux';

import { getProfile, getStatus, updateStatus } from '../../../redux/profile-reducer';
import { logIn } from '../../../redux/auth-reducer';

import LoginOrProfile from './LoginOrProfile';

class LoginOrProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.userId);
        this.props.getStatus(this.props.userId);
    }

    render() {
        return <LoginOrProfile isAuth={this.props.isAuth} profile={this.props.profile} status={this.props.status}
        logIn={this.props.logIn} updateStatus={this.props.updateStatus} getStatus={this.props.getStatus} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profileData,
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, { getProfile, getStatus, updateStatus, logIn })(LoginOrProfileContainer);
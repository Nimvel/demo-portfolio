import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAuthUserProfile, getAuthUserStatus, updateStatus } from '../../../redux/profile/profile-reducer';
import { getAuthId, getIsAuth } from '../../../redux/auth/auth-selectors';

import MiniAuthUserProfile from './MiniAuthUserProfile';
import LoginPageContainer from '../../Login/LoginPageContainer';
import { getAuthProfileData, getAuthStatus } from '../../../redux/profile/profile-selectors';

const LoginOrProfileContainer = ({ getAuthUserProfile, getAuthUserStatus, authUserId, isAuth, ...props }) => {
    useEffect(() => { getAuthUserProfile(authUserId) }, [isAuth]);
    useEffect(() => { getAuthUserStatus(authUserId) }, [isAuth, props.status]);

    return <div>
        {isAuth
            ? <MiniAuthUserProfile
                profile={props.profile} status={props.status}
                updateStatus={props.updateStatus} />
            : <LoginPageContainer />}
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        profile: getAuthProfileData(state),
        status: getAuthStatus(state),
        authUserId: getAuthId(state)
    }
}

export default connect(mapStateToProps, { getAuthUserProfile, getAuthUserStatus, updateStatus })(LoginOrProfileContainer);

// import React from 'react';
// import { connect } from 'react-redux';

// import { getAuthUserProfile, getAuthUserStatus, updateStatus } from '../../../redux/profile/profile-reducer';
// import { logIn } from '../../../redux/auth/auth-reducer';

// import LoginOrProfile from './LoginOrProfile';

// class LoginOrProfileContainer extends React.Component {

//     componentDidMount() {
//         this.props.getAuthUserProfile(this.props.authUserId);
//         this.props.getAuthUserStatus(this.props.authUserId);
//     }

//     render() {
//         return <LoginOrProfile isAuth={this.props.isAuth}
//         profile={this.props.profile} status={this.props.status}
//         logIn={this.props.logIn} updateStatus={this.props.updateStatus} />
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         isAuth: state.auth.isAuth,
//         profile: state.profile.authUserProfileData,
//         status: state.profile.authUserStatus,
//         authUserId: state.auth.id
//     }
// }

// export default connect(mapStateToProps, { getAuthUserProfile, getAuthUserStatus, updateStatus, logIn })(LoginOrProfileContainer);
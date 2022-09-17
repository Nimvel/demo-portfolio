import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAuthUserProfile, getAuthUserStatus, updateStatus } from '../../../redux/profile/profile-reducer';
import { logIn } from '../../../redux/auth/auth-reducer';
import { getAuthId, getIsAuth } from '../../../redux/auth/auth-selectors';

import MiniAuthUserProfile from './MiniAuthUserProfile';
import LoginPage from '../../Login/LoginPage';
import { getAuthProfileData, getAuthStatus } from '../../../redux/profile/profile-selectors';

import style from './LoginOrProfile.module.css';

const LoginOrProfileContainer = ({ getAuthUserProfile, getAuthUserStatus, authUserId, isAuth, ...props }) => {
    useEffect(() => { getAuthUserProfile(authUserId) }, [isAuth]);
    useEffect(() => { getAuthUserStatus(authUserId) }, [isAuth, props.status]);

    return isAuth
            ? <MiniAuthUserProfile
                profile={props.profile} status={props.status}
                updateStatus={props.updateStatus} />
            : <div className={style.mini_login_form} ><LoginPage isAuth={isAuth} logIn={props.logIn} /></div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        profile: getAuthProfileData(state),
        status: getAuthStatus(state),
        authUserId: getAuthId(state)
    }
}

export default connect(mapStateToProps, { getAuthUserProfile, getAuthUserStatus, updateStatus, logIn })(LoginOrProfileContainer);
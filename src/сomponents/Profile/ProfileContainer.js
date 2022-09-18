import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { getProfile, getStatus, updateStatus, saveNewProfilePhoto, saveProfileData } from '../../redux/profile/profile-reducer';
import { getAuthUserId, getAuthStatus, getProfileData, getProfileStatus, getAuthProfileData } from '../../redux/profile/profile-selectors';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';

const ProfileContainer = ({ profile, ...props }) => {
    let userId = props.router.params.userId;
    if (!userId) userId = props.authUserId;

    let [editMode, setEditMode] = React.useState(false);

    const onClickEditProfile = () => {
        setEditMode(true);
    }

    const onSubmit = (profileData) => {
        props.saveProfileData(profileData).then(
            () => setEditMode(false)
        )
    }

    React.useEffect(() => { props.getProfile(userId) }, [userId, props.authUserProfile]);
    React.useEffect(() => { props.getStatus(userId) }, [userId, props.authUserStatus]);

    return <Profile editMode={editMode} onClickEditProfile={onClickEditProfile} onSubmit={onSubmit}
        isAuthUserProfile={userId === props.authUserId}
        profile={profile} status={props.status}
        saveNewProfilePhoto={props.saveNewProfilePhoto} updateStatus={props.updateStatus} />
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileData(state),
        authUserProfile: getAuthProfileData(state),
        status: getProfileStatus(state),
        authUserStatus: getAuthStatus(state),
        authUserId: getAuthUserId(state)
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, saveNewProfilePhoto, saveProfileData }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

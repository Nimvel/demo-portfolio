import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { getProfile, getStatus, getAuthUserStatus, updateStatus, saveNewProfilePhoto } from '../../redux/profile/profile-reducer';
import { getAuthUserId, getAuthStatus, getProfileData, getProfileStatus } from '../../redux/profile/profile-selectors';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';

const ProfileContainer = ({ getProfile, getStatus, profile, getAuthUserStatus, ...props }) => {
    let userId = props.router.params.userId;
    if (!userId) userId = props.authUserId;

    React.useEffect(() => { getProfile(userId) }, [userId])
    // React.useEffect(() => { getNewProfilePhoto(profile.photos) }, [profile.photos])
    React.useEffect(() => { getStatus(userId) }, [userId, props.authUserStatus])

    return <Profile 
    isAuthUserProfile={userId === props.authUserId}
    // userId={userId} authUserId={props.authUserId} 
    profile={profile} status={props.status}
    saveNewProfilePhoto={props.saveNewProfilePhoto} updateStatus={props.updateStatus} />
}

// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         let userId = this.props.router.params.userId;
//         if (!userId) userId = this.props.authUserId;

//         this.props.getProfile(userId);
//         this.props.getStatus(userId);
//     }

//     render() {
//         return <Profile userId={this.userId} authUserId={this.props.authUserId} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
//     }
// }

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
        status: getProfileStatus(state),
        authUserStatus: getAuthStatus(state),
        authUserId: getAuthUserId(state)
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, getAuthUserStatus, updateStatus, saveNewProfilePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

//P.S. переделать классовую компоненту на функциональную и сделать все через хуки
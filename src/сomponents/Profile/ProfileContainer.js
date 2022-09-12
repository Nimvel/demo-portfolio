import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';

import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) userId = this.props.userId;

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} getStatus={this.props.getStatus} />
    }
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
        profile: state.profilePage.profileData,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
    )(ProfileContainer);

//P.S. переделать классовую компоненту на функциональную и сделать все через хуки
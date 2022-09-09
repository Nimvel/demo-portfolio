import React from 'react';
import { connect } from 'react-redux';

import { getFollowButton } from '../../redux/follow-reducer';

import FollowButton from './FollowButton';

class FollowContainer extends React.Component {

    render() {
        return <>
            <FollowButton param={this.props.isFollowed ? 'unfollow' : 'follow' } {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isFollowing: state.followButton.isFollowing
    }
}

export default connect(mapStateToProps, { getFollowButton })(FollowContainer)

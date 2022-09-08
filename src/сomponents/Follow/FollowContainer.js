import React from 'react';
import { connect } from 'react-redux';

import { followingInProgress } from '../../redux/follow-reducer';
import { setUserFollowed } from '../../redux/users-reducer';
import { setFriendFollowed } from '../../redux/friends-reducer';

import FollowButton from './FollowButton';

class FollowContainer extends React.Component {

    render() {
        return <>
            <FollowButton param={this.props.isFollowed ? 'unfollow' : 'follow' }
                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} 
                setUserFollowed={this.props.setUserFollowed}
                setFriendFollowed={this.props.setFriendFollowed}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.followButton.isFetching,
        isFollowing: state.followButton.isFollowing
    }
}

export default connect(mapStateToProps, { followingInProgress, setUserFollowed, setFriendFollowed })(FollowContainer)

import React from 'react';
import { connect } from 'react-redux';

import { getFollowButton } from '../../../redux/users/users-reducer';
import { getIsFollowing } from '../../../redux/users/users-selectors';

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
        isFollowing: getIsFollowing(state)
    }
}

export default connect(mapStateToProps, { getFollowButton })(FollowContainer)

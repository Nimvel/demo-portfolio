import React from 'react';
import { connect } from 'react-redux';

import { usersAPI } from '../../api/api';
import { follow, unfollow, setUsers, followingInProgress } from '../../redux/follow-reducer';
import Follow from './Follow';
import Unfollow from './Unfollow';
// import FollowButton from './FollowButton';

class FollowContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.size).then(data => {
            this.props.setUsers(data.items);
        })
    }

    render() {
        return <>
            {/* <FollowButton param={this.props.isFollowed
                ? this.props.unfollow
                : this.props.follow
            }

                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} /> */}

            {this.props.isFollowed
                ? <Unfollow unfollow={this.props.unfollow}
                
                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} />

                : <Follow follow={this.props.follow}

                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        // userId: props.userId,
        // isFollowed: props.isFollowed,

        isFetching: state.followButton.isFetching,
        isFollowing: state.followButton.isFollowing
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, followingInProgress })(FollowContainer)

import React from 'react';
import { connect } from 'react-redux';

// import { usersAPI } from '../../api/api';
import {
    // follow, unfollow,
    // setUsers, 
    followingInProgress
} from '../../redux/follow-reducer';
import { setUserFollowed } from '../../redux/users-reducer';
import { setFriendFollowed } from '../../redux/friends-reducer';
// import Follow from './Follow';
// import Unfollow from './Unfollow';
import FollowButton from './FollowButton';

class FollowContainer extends React.Component {
    componentDidMount() {
        // usersAPI.getUsers(this.props.currentPage, this.props.size).then(data => {
        //     this.props.setUsers(data.items);
        // })
    }

    render() {
        return <>
            <FollowButton param={this.props.isFollowed ? 'unfollow' : 'follow' }
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} 
                setUserFollowed={this.props.setUserFollowed}
                setFriendFollowed={this.props.setFriendFollowed}
                />

            {/* {this.props.isFollowed
                ? <Unfollow unfollow={this.props.unfollow}
                
                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress}
                toggleIsFetching={this.props.toggleIsFetching} />

                : <Follow follow={this.props.follow}

                userId={this.props.userId}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingInProgress={this.props.followingInProgress} 
                toggleIsFetching={this.props.toggleIsFetching} />} */}
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

export default connect(mapStateToProps, {
    // follow, unfollow,
    // setUsers, 
    followingInProgress,
    setUserFollowed, setFriendFollowed
})(FollowContainer)

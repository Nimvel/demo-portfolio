import React from "react";
import { connect } from "react-redux";

import { friendsAPI } from "../../api/api";
import { setFriends, setCurrentPage, setTotalCount
    // follow, unfollow, followingInProgress
 } from '../../redux/friends-reducer';

import Preloader from "../common/Preloader/Preloader";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        friendsAPI.getFriends().then(data => {
            this.props.setFriends(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        friendsAPI.getFriends(pageNumber, this.props.size).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Friends friends={this.props.friends}
                    
                currentPage={this.props.currentPage}
                count={this.props.count}
                size={this.props.size}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged} />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        size: state.friendsPage.size,
        count: state.friendsPage.count,
        isFetching: state.friendsPage.isFetching,
        // isFollowing: state.friendsPage.isFollowing
    }
}

export default connect(mapStateToProps, { setFriends, setCurrentPage, setTotalCount
    // follow, unfollow, followingInProgress
 })(FriendsContainer);

import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getFriends } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { getFriendsCurrentPage, getFriendsData, getIsFetching, getSize, getTotalFriendsCount, getTotalUsersCount, getUsersCurrentPage, getUsersData } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersCurrentPage, this.props.size)
        this.props.getFriends(this.props.friendsCurrentPage, this.props.size)
    }

    onUsersPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.size)
    }

    onFriendsPageChanged = (pageNumber) => {
        this.props.getFriends(pageNumber, this.props.size)
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader />
        } else {
            return this.props.getPeople === 'getUsers'

                ? <Users
                    usersData={this.props.usersData}
                    currentPage={this.props.usersCurrentPage}
                    size={this.props.size}
                    count={this.props.totalUsersCount}
                    isFetching={this.props.isFetching}
                    onPageChanged={this.onUsersPageChanged} />

                : <Users
                    usersData={this.props.friendsData}
                    currentPage={this.props.friendsCurrentPage}
                    size={this.props.size}
                    count={this.props.totalFriendsCount}
                    isFetching={this.props.isFetching}
                    onPageChanged={this.onFriendsPageChanged} />
        }
    }
}

let mapStateToProps = (state) => {
    return {
        usersData:  getUsersData(state),
        friendsData: getFriendsData(state),

        usersCurrentPage: getUsersCurrentPage(state),
        friendsCurrentPage: getFriendsCurrentPage(state),

        totalUsersCount: getTotalUsersCount(state),
        totalFriendsCount: getTotalFriendsCount(state),

        size: getSize(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, { getUsers, getFriends }),
    withAuthRedirect
)(UsersContainer)

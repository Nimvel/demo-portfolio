import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getFriends } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

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
        usersData: state.usersPage.usersData,
        friendsData: state.usersPage.friendsData,

        usersCurrentPage: state.usersPage.usersCurrentPage,
        friendsCurrentPage: state.usersPage.friendsCurrentPage,

        totalUsersCount: state.usersPage.totalUsersCount,
        totalFriendsCount: state.usersPage.totalFriendsCount,

        size: state.usersPage.size,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, { getUsers, getFriends }),
    withAuthRedirect
)(UsersContainer)

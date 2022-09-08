import React from 'react';
import { connect } from 'react-redux';

import { usersAPI } from '../../api/api';
import { follow, unfollow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, followingInProgress } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.size).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.size).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    usersData={this.props.usersData}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    count={this.props.count}
                    size={this.props.size}
                    isFetching={this.props.isFetching}
                    isFollowing={this.props.isFollowing}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        currentPage: state.usersPage.currentPage,
        size: state.usersPage.size,
        count: state.usersPage.count,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, followingInProgress })(UsersContainer)

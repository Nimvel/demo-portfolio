import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage } from '../../redux/users/users-reducer';
import {
    getFriendsCurrentPage, getFriendsData, getIsFetching, getSize,
    getTotalFriendsCount, getTotalUsersCount, getUsersCurrentPage, getUsersData
} from '../../redux/users/users-selectors';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';

import Users from './Users'

const UsersContainer = (props) => {

    React.useEffect(() => { props.getUsers(props.usersCurrentPage, props.size) }, []);
    React.useEffect(() => { props.getFriends(props.friendsCurrentPage, props.size) }, []);

    const onUsersPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.size)
    }

    const onFriendsPageChanged = (pageNumber) => {
        props.getFriends(pageNumber, props.size)
    }

    if (props.isFetching) {
        return <Preloader />
    }
    else {
        return props.getPeople === 'getUsers'
            ? <Users
                getUsers={props.getUsers}
                usersData={props.usersData}
                currentPage={props.usersCurrentPage}
                setCurrentPage={props.setUsersCurrentPage}
                size={props.size}
                count={props.totalUsersCount}
                isFetching={props.isFetching}
                onPageChanged={onUsersPageChanged} />

            : <Users
                getUsers={props.getFriends}
                usersData={props.friendsData}
                currentPage={props.friendsCurrentPage}
                setCurrentPage={props.setFriendsCurrentPage}
                size={props.size}
                count={props.totalFriendsCount}
                isFetching={props.isFetching}
                onPageChanged={onFriendsPageChanged} />
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
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
    connect(mapStateToProps, { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage }),
    withAuthRedirect
)(UsersContainer)

// import React from 'react'
// import { connect } from 'react-redux'
// import { compose } from 'redux'

// import { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage } from '../../redux/users/users-reducer'
// import {
//     getFriendsCurrentPage, getFriendsData, getIsFetching, getSize,
//     getTotalFriendsCount, getTotalUsersCount, getUsersCurrentPage, getUsersData
// } from '../../redux/users/users-selectors'

// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
// import Preloader from '../common/Preloader/Preloader'

// import Users from './Users'

// const UsersContainer = ({ size, getUsers, getFriends, ...props }) => {

//     React.useEffect(() => { getUsers(props.usersCurrentPage, size) }, [])
//     React.useEffect(() => { getFriends(props.friendsCurrentPage, size) }, [])

//     const onUsersPageChanged = (pageNumber) => {
//         getUsers(pageNumber, size)
//     }

//     const onFriendsPageChanged = (pageNumber) => {
//         getFriends(pageNumber, size)
//     }

//     if (props.isFetching) {
//         return <Preloader />
//     }
//     else {
//         return props.getPeople === 'getUsers'
//             ? <Users
//                 getUsers={getUsers}
//                 usersData={props.usersData}
//                 currentPage={props.usersCurrentPage}
//                 setCurrentPage={props.setUsersCurrentPage}
//                 size={size}
//                 count={props.totalUsersCount}
//                 isFetching={props.isFetching}
//                 onPageChanged={onUsersPageChanged} />

//             : <Users
//                 getUsers={getFriends}
//                 usersData={props.friendsData}
//                 currentPage={props.friendsCurrentPage}
//                 setCurrentPage={props.setFriendsCurrentPage}
//                 size={size}
//                 count={props.totalFriendsCount}
//                 isFetching={props.isFetching}
//                 onPageChanged={onFriendsPageChanged} />
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         usersData: getUsersData(state),
//         friendsData: getFriendsData(state),

//         usersCurrentPage: getUsersCurrentPage(state),
//         friendsCurrentPage: getFriendsCurrentPage(state),

//         totalUsersCount: getTotalUsersCount(state),
//         totalFriendsCount: getTotalFriendsCount(state),

//         size: getSize(state),
//         isFetching: getIsFetching(state)
//     }
// }

// export default compose(
//     connect(mapStateToProps, { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage }),
//     withAuthRedirect
// )(UsersContainer)

import { Component, FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage, UserDataType } from '../../redux/users/users-reducer'
import {
    getFriendsCurrentPage, getFriendsData, getIsFetching, getSize,
    getTotalFriendsCount, getTotalUsersCount, getUsersCurrentPage, getUsersData
} from '../../redux/users/users-selectors'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Preloader from '../common/Preloader/Preloader'

import Users from './Users'
import { AppStateType } from '../../redux/store'

type MapStateToPropsType = {
    size: number
    totalUsersCount: number
    totalFriendsCount: number
    isFetching: boolean
    usersData: Array<UserDataType>
    friendsData: Array<UserDataType>
    usersCurrentPage: number
    friendsCurrentPage: number
}

type MapDispatchToPropsType = {
    setUsersCurrentPage: () => void
    setFriendsCurrentPage: () => void
    getUsers: any
    getFriends: any

}

type OwnPropsType = {
    getPeople: 'getUsers' | 'getFriends'
}

type UsersContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const UsersContainer: FC<UsersContainerProps> = ({ size, totalUsersCount, totalFriendsCount, isFetching,
    usersData, friendsData, usersCurrentPage, friendsCurrentPage, getPeople, getUsers, getFriends }) => {

    useEffect(() => { getUsers(usersCurrentPage, size) }, [])
    useEffect(() => { getFriends(friendsCurrentPage, size) }, [])

    const onUsersPageChanged = (pageNumber: number) => {
        getUsers(pageNumber, size)
    }

    const onFriendsPageChanged = (pageNumber: number) => {
        getFriends(pageNumber, size)
    }

    if (isFetching) {
        return <Preloader />
    }
    else {
        return getPeople === 'getUsers'
            ? <Users
                getUsers={getUsers}
                usersData={usersData}
                currentPage={usersCurrentPage}
                setCurrentPage={setUsersCurrentPage}
                size={size}
                count={totalUsersCount}
                onPageChanged={onUsersPageChanged} />

            : <Users
                getUsers={getFriends}
                usersData={friendsData}
                currentPage={friendsCurrentPage}
                setCurrentPage={setFriendsCurrentPage}
                size={size}
                count={totalFriendsCount}
                onPageChanged={onFriendsPageChanged} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

export default compose<Component>(
    connect
        // <MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
        (mapStateToProps, { getUsers, getFriends, setUsersCurrentPage, setFriendsCurrentPage }),
    withAuthRedirect
)(UsersContainer)
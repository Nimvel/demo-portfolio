import React from 'react'
import { UserDataType } from '../../redux/users/users-reducer'
import Paginator from '../common/Paginator/Paginator'

import ActiveFriends from '../Friends/ActiveFriends'
import User from './User/User'

import styles from './Users.module.scss'

type UsersProps = {
    currentPage: number
    size: number
    count: number
    usersData: Array<UserDataType>
    onPageChanged: any
    setCurrentPage: any
    getUsers: () => void
}

const Users: React.FC<UsersProps> = ({ currentPage, size, count, usersData, onPageChanged, setCurrentPage, getUsers }) => {
    const usersElements =
        usersData.map(u => <User key={u.id}
            userId={u.id} userName={u.name}
            userImg={u.photos.small}
            isFollowed={u.followed} />)

    return (
        <div className={styles.usersPage}>
            <Paginator currentPage={currentPage} count={count} size={size}
                setCurrentPage={setCurrentPage} onPageChanged={onPageChanged} getUsers={getUsers} />
            <div className={styles.users}>
                {usersElements}
            </div>
            <div className={styles.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Users
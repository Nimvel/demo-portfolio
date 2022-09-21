import React from 'react';
import PaginatorContainer from '../common/Paginator/PaginatorContainer';

import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';

import styles from './Users.module.scss';

const Users = ({ currentPage, onPageChanged, usersData, setCurrentPage, getUsers, size, ...props }) => {
    let usersElements =
        usersData.map(u => <User key={u.id}
            userId={u.id} userName={u.name}
            userImg={u.photos.small}
            isFollowed={u.followed} /> )

    let pages = [];
    let pagesCount = Math.ceil(props.count / size);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersPage}>
                <PaginatorContainer pages={pages} currentPage={currentPage} size={size}
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

export default Users;

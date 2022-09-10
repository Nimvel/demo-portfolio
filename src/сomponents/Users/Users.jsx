import React from 'react';
import Paginator from '../common/Paginator/Paginator';

import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';

import style from './Users.module.css';

const Users = ({ currentPage, onPageChanged, usersData, ...props }) => {
    let usersElements =
        usersData.map(u => <User key={u.id}
            userId={u.id} userName={u.name}
            userImg={u.photos.small}
            isFollowed={u.followed} /> )

    let pages = [];
    let pagesCount = Math.ceil(props.count / props.size);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.usersPage}>
            <div>
                <Paginator pages={pages} currentPage={currentPage} onPageChanged={onPageChanged} />
            </div>

            <div className={style.users}>
                {usersElements}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Users;

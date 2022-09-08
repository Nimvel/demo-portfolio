import React from 'react';

import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';

import style from './Users.module.css';

const Users = (props) => {
        let usersElements =
            props.usersData.map(u => <User key={u.id}
                userId={u.id} userName={u.name}
                userImg={u.photos.small}
                isFollowed={u.followed}
                follow={props.follow} unfollow={props.unfollow}
                isFollowing={props.isFollowing}
                followingInProgress={props.followingInProgress} />
            )

        let pages = [];
        let pagesCount = Math.ceil(props.count / props.size);

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={style.usersPage}>
                <div>
                    {pages.map( p => {
                        if (p === 1 || ( p >= props.currentPage - 2 && p <= props.currentPage + 2 ) || p === pages.length ) {
                            return <span className={props.currentPage === p ? style.selectedPage : ''} 
                            onClick={(e) => { props.onPageChanged(p) }} > {p} </span>
                        }

                        else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
                            return <span>...</span>
                        }})}
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

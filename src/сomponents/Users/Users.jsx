import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';
import style from './Users.module.css';

const Users = ({ usersData, follow, unfollow }) => {
    let usersElements = usersData.map(u =>
        <User key={u.id}
            userId={u.id} userName={u.userName}
            userImg={u.userImg} isFollowed={u.isFollowed}
            follow={follow} unfollow={unfollow} />)

    return (
        <div className={style.usersPage}>
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

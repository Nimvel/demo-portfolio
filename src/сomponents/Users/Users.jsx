import * as axios from 'axios';

import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';

import style from './Users.module.css';


const Users = ({ setUsers, usersData, follow, unfollow }) => {
    let getUsers = () => {
        if (usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
        }
    }

    let usersElements = 
    usersData.map(u => <User key={u.id}
            userId={u.id} userName={u.name}
            userImg={u.photos.small}
            isFollowed={u.followed}
            follow={follow} unfollow={unfollow} />
        )

    return (
        <div className={style.usersPage}>
            <button onClick={getUsers} className={style.get_users}>get users</button>
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

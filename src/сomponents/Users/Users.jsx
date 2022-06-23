import * as axios from 'axios';

import ActiveFriends from '../Friends/ActiveFriends';
import User from './User/User';

import style from './Users.module.css';

// import userImg from '../../assets/icons/comrade.png';


const Users = ({ setUsers, usersData, follow, unfollow }) => {
    if (usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            setUsers(response.data.items)
        })

        // setUsers( [
        // { id: 1, userName: 'Kurapika', userImg: user, isFollowed: false },
        // { id: 2, userName: 'Lucifer', userImg: user, isFollowed: true },
        // { id: 3, userName: 'Ledy Maria', userImg: user, isFollowed: false }])
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

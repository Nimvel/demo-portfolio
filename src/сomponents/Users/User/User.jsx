import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const User = ({ userId, userName, userImg, isFollowed, follow, unfollow }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg != null ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{userName}</div>
            {isFollowed
                ? <button onClick={() => {
                    usersAPI.unfollow(userId).then(data => data.resultCode === 0 && unfollow(userId))
                }}>Unfollow</button>

                : <button onClick={() => {
                    usersAPI.follow(userId).then(data => data.resultCode === 0 && follow(userId))
                }}>Follow</button>}
        </div>
    )
}

export default User;

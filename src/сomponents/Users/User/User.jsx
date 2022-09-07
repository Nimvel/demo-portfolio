import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';
import { NavLink } from 'react-router-dom';

const User = ({ userId, userName, userImg, isFollowed, follow, unfollow }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg != null ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{userName}</div>
            {isFollowed
                ? <button onClick={() => { unfollow(userId) }}>Unfollow</button>
                : <button onClick={() => { follow(userId) }}>Follow</button>}
        </div>
    )
}

export default User;

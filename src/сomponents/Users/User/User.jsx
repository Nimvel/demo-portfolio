import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

const User = ({ userId, userName, userImg, isFollowed, follow, unfollow, isFollowing, followingInProgress }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{userName}</div>
            {isFollowed
                ? <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
                    followingInProgress(true, userId);
                    usersAPI.unfollow(userId).then(data => {
                        data.resultCode === 0 && unfollow(userId)
                        followingInProgress(false, userId);
                    });
                }}>Unfollow</button>

                : <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
                    followingInProgress(true, userId);
                    usersAPI.follow(userId).then(data => {
                        data.resultCode === 0 && follow(userId);
                        followingInProgress(false, userId);
                    });
                }}>Follow</button>}
        </div>
    )
}

export default User;

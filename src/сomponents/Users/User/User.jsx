import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';
import { NavLink } from 'react-router-dom';
import FollowContainer from '../../Follow/FollowContainer';

const User = ({ userId, userName, userImg, isFollowed }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{userName}</div>
            <FollowContainer userId={userId} isFollowed={isFollowed} />
        </div>
    )
}

export default User;

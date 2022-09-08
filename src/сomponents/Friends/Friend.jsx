import { NavLink } from 'react-router-dom';
import style from './../Users/Users.module.css';
import userPhoto from '../../assets/icons/comrade.png';
import FollowContainer from '../Follow/FollowContainer';

const Friend = ({ friendId, friendName, friendImg, 
    // isFollowing, followingInProgress, follow, unfollow, 
    isFollowed }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + friendId}>
                <img src={friendImg ? friendId : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{friendName}</div>
            <FollowContainer userId={friendId} isFollowed={isFollowed} />
        </div>
    )
}

export default Friend;

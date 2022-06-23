import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';

const User = ({userId, userName, userImg, isFollowed, follow, unfollow }) => {
    return (
        <div className={style.user}>
            <img src={userImg != null ? userImg : userPhoto} alt='user avatar' />
            <div className={style.user_name}>{userName}</div>
            {isFollowed
                ? <button onClick={() => { unfollow(userId) }}>Unfollow</button>
                : <button onClick={() => { follow(userId) }}>Follow</button>}
        </div>
    )
}

export default User;

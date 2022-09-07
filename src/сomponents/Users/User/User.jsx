import style from '../Users.module.css';
import userPhoto from '../../../assets/icons/comrade.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = ({ userId, userName, userImg, isFollowed, follow, unfollow }) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg != null ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={style.user_name}>{userName}</div>
            {isFollowed
                ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                unfollow(userId)
                            }
                        })

                }}>Unfollow</button>
                : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4'
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                follow(userId)
                            }
                        })
                }}>Follow</button>}
        </div>
    )
}

export default User;

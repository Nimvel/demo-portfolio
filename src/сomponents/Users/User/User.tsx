import { NavLink } from 'react-router-dom'

import FollowContainer from '../Follow/FollowContainer'
import userPhoto from '../../../assets/icons/comrade.png'

import styles from '../Users.module.scss'
import { FC } from 'react'

type PropsType = {
    userId: number
    userName: string
    userImg: string
    isFollowed: boolean
}

const User: FC<PropsType> = ({ userId, userName, userImg, isFollowed }) => {
    return (
        <div className={styles.user}>
            <NavLink to={'/profile/' + userId}>
                <img src={userImg ? userImg : userPhoto} alt='user avatar' />
            </NavLink>
            <div className={styles.user__name}>{userName}</div>
            <FollowContainer userId={userId} isFollowed={isFollowed} />
        </div>
    )
}

export default User
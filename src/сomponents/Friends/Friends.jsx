import Friend from "./Friend";
import style from './../Users/Users.module.css';
import ActiveFriends from "./ActiveFriends";
import Paginator from "../common/Paginator/Paginator";

const Friends = ({ currentPage, onPageChanged, ...props }) => {
    let friendsElenemts = props.friends.map(f => <Friend key={f.id}
        friendId={f.id}
        friendName={f.name}
        friendImg={f.photos.small}
        isFollowed={f.followed}
    />)

    let pages = [];
    let pagesCount = Math.ceil(props.count / props.size);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.usersPage}>
            <Paginator pages={pages} currentPage={currentPage} onPageChanged={onPageChanged} />

            <div className={style.users}>
                {friendsElenemts}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Friends;

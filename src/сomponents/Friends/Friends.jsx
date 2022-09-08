import Friend from "./Friend";
import style from './../Users/Users.module.css';
import ActiveFriends from "./ActiveFriends";
import Paginator from "../common/Paginator/Paginator";

const Friends = ({ currentPage, onPageChanged, ...props }) => {
    let friendsElenemts = props.friends.map(f => <Friend key={f.id}
        friendId={f.id}
        friendName={f.name}
        friendImg={f.photos.small}

        // isFollowing={props.isFollowing}

        isFollowed={f.followed}
    // follow={props.follow} unfollow={props.unfollow}
    // followingInProgress={props.followingInProgress}
    />)

    let pages = [];
    let pagesCount = Math.ceil(props.count / props.size);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.usersPage}>
            <Paginator pages={pages} currentPage={currentPage} onPageChanged={onPageChanged} />
            {/* <div>
                    {pages.map( p => {
                        if (p === 1 || ( p >= props.currentPage - 2 && p <= props.currentPage + 2 ) || p === pages.length ) {
                            return <span className={props.currentPage === p ? style.selectedPage : ''} 
                            onClick={(e) => { props.onPageChanged(p) }} > {p} </span>
                        }

                        else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
                            return <span>...</span>
                        }})}
                </div> */}

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

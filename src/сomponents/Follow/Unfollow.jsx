import { followAPI } from "../../api/api";

const Unfollow = ({ userId, unfollow, isFollowing, followingInProgress, toggleIsFetching }) => {
    return <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
                    followingInProgress(true, userId);
                    followAPI.unfollow(userId).then(data => {
                        data.resultCode === 0 && unfollow(userId)
                        followingInProgress(false, userId);
                        toggleIsFetching(false);
                    });
                }}>Unfollow</button>
}

export default Unfollow;

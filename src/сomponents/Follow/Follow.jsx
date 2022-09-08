import { followAPI } from "../../api/api";

const Follow = ({ userId, follow, isFollowing, followingInProgress }) => {
    return <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
                    followingInProgress(true, userId);
                    followAPI.follow(userId).then(data => {
                        data.resultCode === 0 && follow(userId);
                        followingInProgress(false, userId);
                    });
                }}>Follow</button>
}

export default Follow;

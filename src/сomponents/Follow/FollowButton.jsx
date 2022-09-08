import { followAPI } from "../../api/api";

const FollowButton = ({ userId, param, isFollowing, followingInProgress, 
    // follow, unfollow,
    setUserFollowed, setFriendFollowed 
}) => {
    // debugger
    return <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
                    followingInProgress(true, userId);
                    followAPI[param](userId).then(data => {
                        if (param === 'follow') {
                            if (data.resultCode === 0) {
                                setUserFollowed(userId, true);
                                setFriendFollowed(userId, true);
                            }
                        }
                        else {
                            if (data.resultCode === 0) {
                                setUserFollowed(userId, false);
                                setFriendFollowed(userId, false);
                            }
                        }
                        followingInProgress(false, userId);

                    }
                    );
                }}>{param}</button>
}

export default FollowButton;

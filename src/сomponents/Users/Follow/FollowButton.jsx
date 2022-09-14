const FollowButton = ({ userId, param, isFollowing, getFollowButton }) => {
    return <button disabled={isFollowing.some(u => u === userId)} onClick={() => {
        getFollowButton(param, userId);
    }}>{param}</button>
}

export default FollowButton;

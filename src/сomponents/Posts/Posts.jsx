import ActiveFriends from "../Friends/ActiveFriends";
import NewPost from "./Post/NewPost";
import Post from "./Post/Post";
import style from './Posts.module.css';

const Posts = ({ postsData, newPostText, onPostChange, addNewPost, like }) => {
    let postsElements = postsData.map(p =>
        <Post key={p.id}
            id={p.id}
            like={like}
            comradeImg={p.comradeImg}
            comradeName={p.comradeName}
            message={p.message}
            likes={p.likesCount} />)

    return (
        <div className={style.postsPage}>
            <div className={style.posts}>
                <NewPost
                    newPostText={newPostText}
                    onPostChange={onPostChange}
                    addNewPost={addNewPost} />
                {postsElements}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Posts;
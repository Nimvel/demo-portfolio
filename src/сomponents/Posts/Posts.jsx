import EnterNewTextForm from "../EnterNewTextForm/EnterNewTextForm";
import ActiveFriends from "../Friends/ActiveFriends";
import Post from "./Post";

import style from './Posts.module.css';

const Posts = ({ postsData, addNewPost, like }) => {

    let postsElements = postsData.map(p => <Post key={p.id}
        id={p.id} like={like} message={p.message}
        comradeImg={p.comradeImg} comradeName={p.comradeName}
        likes={p.likesCount} />)

    let onSubmit = (values) => {
        addNewPost(values.newText)
    }

    return (
        <div className={style.postsPage}>
            <div className={style.posts}>
                <EnterNewTextForm onSubmit={onSubmit} />
                {postsElements}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

export default Posts;
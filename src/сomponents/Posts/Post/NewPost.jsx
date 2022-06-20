import React from 'react';
import style from '../Posts.module.css';

const NewPost = ({ newPostText, onPostChange, addNewPost }) => {
    let onChange = (e) => {
        let text = e.target.value;
        onPostChange(text)
    }

    return (
        <div className={style.new_post} >
            <textarea placeholder='Enter your post' value={newPostText} onChange={onChange} />
            <button onClick={() => addNewPost()} >add post</button>
        </div>
    )
}

export default NewPost;

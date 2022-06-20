import style from '../Posts.module.css';

const Post = ({ id, like, comradeImg, comradeName, message, likes }) => {
    let onClick = () => {
        like(id);
    }

    return (
        <div className={style.post}>
            <img src={comradeImg} className={style.comrade_img} alt='user avatar' />
            <div className={style.comrade_name}>
                {comradeName}
            </div>
            <div className={style.comrade_message}>
                {message}
            </div>
            <span className={style.likes} onClick={onClick}>Likes {likes}</span>
        </div>
    )
}

export default Post;
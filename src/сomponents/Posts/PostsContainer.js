import { connect } from "react-redux";
import { addPostActionCreator, likeActionCreator, updateNewPostTextActionCreator } from "../../redux/posts-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.postsPage.postsData,
        newPostText: state.postsPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addNewPost: () => dispatch(addPostActionCreator()),
        like: (id) => dispatch(likeActionCreator(id))
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
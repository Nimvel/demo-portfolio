import { connect } from "react-redux";
import { compose } from "redux";

import { addNewPost, like } from "../../redux/posts-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.posts.postsData
    }
}

export default compose(
    connect(mapStateToProps, { addNewPost, like }),
    withAuthRedirect
    )(Posts)
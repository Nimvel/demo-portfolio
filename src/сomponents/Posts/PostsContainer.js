import { connect } from "react-redux";

import { addNewPost, like } from "../../redux/posts-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.postsPage.postsData
    }
}

export default connect(mapStateToProps, { addNewPost, like })(Posts)
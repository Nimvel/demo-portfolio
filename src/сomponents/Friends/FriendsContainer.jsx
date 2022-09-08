import React from "react";
import { connect } from "react-redux";
import { getFriends } from '../../redux/friends-reducer';

import Preloader from "../common/Preloader/Preloader";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.size)
    }

    onPageChanged = (pageNumber) => {
        this.props.getFriends(pageNumber, this.props.size)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Friends friends={this.props.friends}
                    currentPage={this.props.currentPage}
                    count={this.props.count}
                    size={this.props.size}
                    isFetching={this.props.isFetching}

                    onPageChanged={this.onPageChanged} />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        size: state.friendsPage.size,
        count: state.friendsPage.count,
        isFetching: state.friendsPage.isFetching
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsContainer);

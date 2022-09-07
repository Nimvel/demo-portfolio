import React from 'react';
import * as axios from 'axios';

import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.size}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.size}`)
            .then(response => { this.props.setUsers(response.data.items) })
    }

    render() {
        return <>
            { this.props.isFetching
            ? <Preloader />
            : <Users
                usersData={this.props.usersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                count={this.props.count}
                size={this.props.size}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged} /> }
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        currentPage: state.usersPage.currentPage,
        size: state.usersPage.size,
        count: state.usersPage.count,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching })(UsersContainer)

import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.size);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.size);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    usersData={this.props.usersData}
                    currentPage={this.props.currentPage}
                    size={this.props.size}
                    count={this.props.count}
                    isFetching={this.props.isFetching}
                    
                    onPageChanged={this.onPageChanged}
                />}
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

export default connect(mapStateToProps, { getUsers })(UsersContainer)

import React from "react";
import { connect } from "react-redux";

import { logOut } from '../../redux/auth/auth-reducer';

import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <Header isAuth={this.props.isAuth} logOut={this.props.logOut} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logOut })(HeaderContainer);

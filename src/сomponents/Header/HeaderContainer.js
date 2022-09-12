import React from "react";
import { connect } from "react-redux";

import { authMe, logOut } from '../../redux/auth-reducer';

import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} logOut={this.props.logOut} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { authMe, logOut })(HeaderContainer);

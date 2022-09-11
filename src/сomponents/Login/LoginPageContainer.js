import React from "react";
import { connect } from "react-redux";

import { authMe, logIn } from '../../redux/auth-reducer';
import LoginPage from "./LoginPage";

class LoginPageContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <LoginPage isAuth={this.props.isAuth} login={this.props.login} logIn={this.props.logIn} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { authMe, logIn })(LoginPageContainer);

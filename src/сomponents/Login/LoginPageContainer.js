import React from "react";
import { connect } from "react-redux";

import { logIn } from '../../redux/auth-reducer';
import { getIsAuth } from "../../redux/auth-selectors";

import LoginPage from "./LoginPage";

class LoginPageContainer extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <LoginPage isAuth={this.props.isAuth} logIn={this.props.logIn} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, { logIn })(LoginPageContainer);

import React from "react";
import { connect } from "react-redux";

import { logIn } from '../../redux/auth/auth-reducer';
import { getIsAuth } from "../../redux/auth/auth-selectors";

import LoginPage from "./LoginPage";
import styles from './LoginPage.module.css'

class LoginPageContainer extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div className='login_page' >
                <div className={styles.login_page_form}>
                <LoginPage isAuth={this.props.isAuth} logIn={this.props.logIn} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, { logIn })(LoginPageContainer);

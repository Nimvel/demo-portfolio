import React from "react";
import { connect } from "react-redux";

import { logIn } from '../../redux/auth/auth-reducer';
import { getIsAuth, getCaptchaUrl } from "../../redux/auth/auth-selectors";

import LoginPage from "./LoginPage";
import styles from './LoginPage.module.css'

const LoginPageContainer = (props) => {
    return (
        <div className='login_page' >
            <div className={styles.login_page_form}>
                <LoginPage isAuth={props.isAuth} logIn={props.logIn} captchaUrl={props.captchaUrl} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state)
})

export default connect(mapStateToProps, { logIn })(LoginPageContainer);

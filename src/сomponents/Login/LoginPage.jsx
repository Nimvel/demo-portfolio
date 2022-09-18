import React from 'react'
import { Navigate } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../common/FormsControls/validators/validators'

import styleError from '../common/FormsControls/FormsControls.module.css'
import styles from './LoginPage.module.css'

let LoginForm = ({ error, captchaUrl, ...props }) => {
    return <form onSubmit={props.handleSubmit} className={styles.login_form}>
        <label>Email:</label>
        {createField(Input, [required], 'email', '', 'Enter your email')}
        <label>Password:</label>
        {createField(Input, [required], 'password', 'password', 'Enter your password')}
        {createField(Input, [], 'rememberMe', 'checkbox', null, null, 'remember me')}

        {error && <span className={styles.error} >{error}
            {error === 'Incorrect anti-bot symbols' && '. Please click on log out to enter the captcha'} </span>}

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField(Input, [required], 'captcha', '', 'Enter captcha')}
        <button className={styles.login_form_button}>Login</button>
    </form>
}

export const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ isAuth, logIn, ...props }) => {
    const onSubmit = ({ email, password, rememberMe, captcha }) => {
        logIn({ email, password, rememberMe, captcha })
    }

    return <div>
        {isAuth
            ? <Navigate to='/profile' />
            : <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        }
    </div>
}

export default LoginPage;

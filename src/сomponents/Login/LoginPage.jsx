import React from 'react'
import { Navigate } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../common/FormsControls/validators/validators'

import styleError from '../common/FormsControls/FormsControls.module.css'
import styles from './LoginPage.module.css'

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.login_form}>
        <label>Email:</label>
        {createField(Input, [required], 'email', '', 'Enter your email')}
        <label>Password:</label>
        {createField(Input, [required], 'password', 'password', 'Enter your password')}
        {createField(Input, [], 'rememberMe', 'checkbox', null, null, 'remember me')}
        {props.error && <span className={styleError.loginFormError} >{props.error}</span>}
        <button className={styles.login_form_button}>Login</button>
    </form>
}

export const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ isAuth, logIn }) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        logIn({ email, password, rememberMe })
    }

    return <div>
        {isAuth
            ? <Navigate to='/profile' />
            : <LoginFormRedux onSubmit={onSubmit} />
        }
    </div>
}

export default LoginPage;

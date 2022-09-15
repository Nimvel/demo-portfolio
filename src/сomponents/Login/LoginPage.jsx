import React from 'react'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../common/FormsControls/validators/validators'

import styleError from '../common/FormsControls/FormsControls.module.css'
import styles from './LoginPage.module.css'

let LoginForm = (props) => {
    const maxLength50 = maxLengthCreator(50);
    const Input = FormElement('input');

    return <form onSubmit={props.handleSubmit} className={styles.login_form}>
            <label>Email:</label>
            <Field component={Input} validate={[required, maxLength50]} type="email" name="email" placeholder="Enter your email" />
            <label>Password:</label>
            <Field component={Input} validate={[required, maxLength50]} type="password" name="password" placeholder="Enter your password" />
        <div className={styles.login_form_checkbox}>
            <Field component="input" type="checkbox" name="rememberMe" />remember me
        </div>
        {props.error && <span className={styleError.loginFormError} >{props.error}</span>}
            <button className={styles.login_form_button} type="submit">Login</button>
    </form>
}

export const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ isAuth, logIn }) => {
    const onSubmit = ( {email, password, rememberMe} ) => {
        logIn( {email, password, rememberMe} )
    }

    return <div>
        {isAuth
            ? <Navigate to='/profile' />
            : <LoginFormRedux onSubmit={onSubmit} />
            }
    </div>
}

export default LoginPage;

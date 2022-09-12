import React from 'react'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../FormsControls/FormsControls'
import { maxLengthCreator, required } from '../FormsControls/validators/validators'

import styles from '../FormsControls/FormsControls.module.css'

let LoginForm = (props) => {
    const maxLength50 = maxLengthCreator(50);
    const Input = FormElement('input');

    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email:</label>
            <Field component={Input} validate={[required, maxLength50]} type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
            <label>Password:</label>
            <Field component={Input} validate={[required, maxLength50]} type="password" name="password" placeholder="Enter your password" />
        </div>
        <div>
            <Field component="input" type="checkbox" name="rememberMe" />remember me
        </div>
        {props.error && <span className={styles.loginFormError} >{props.error}</span>}
        <div>
            <button type="submit">Login</button>
        </div>
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

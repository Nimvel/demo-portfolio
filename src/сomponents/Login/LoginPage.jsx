import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../FormsControls/FormsControls'
import { maxLengthCreator, required } from '../FormsControls/validators/validators'

let LoginForm = (props) => {
    const maxLength20 = maxLengthCreator(29);
    const Input = FormElement('input');

    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email:</label>
            <Field component={Input} validate={[required, maxLength20]} type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
            <label>Password:</label>
            <Field component={Input} validate={[required, maxLength20]} type="password" name="password" placeholder="Enter your password" />
        </div>
        <div>
            <Field component="input" type="checkbox" name="rememberMe" />remember me
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}

let LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ isAuth, login, logIn }) => {
    const onSubmit = ( {email, password, rememberMe} ) => {
        logIn( {email, password, rememberMe} )
    }

    return <div>
        {isAuth
            ? login
            : <LoginFormRedux onSubmit={onSubmit} />}
    </div>
}

export default LoginPage;

import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
    // const { handleSubmit } = props

    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email:</label>
            <Field component="input" type="email" name="login" placeholder="Login" />
        </div>
        <div>
            <label>Password:</label>
            <Field component="input" type="password" name="password" placeholder="Enter your password" />
        </div>
        <div>
            <Field component="input" type="checkbox" name="checkbox" />remember me
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}

let LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ isAuth, login }) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        {isAuth
            ? login
            : <LoginFormRedux onSubmit={onSubmit} />}
    </div>
}

export default LoginPage;

import { Field, reduxForm } from 'redux-form'

import style from './EnterNewTextForm.module.css';

const EnterNewTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.new_text} >
            <Field component='textarea' name='newText' placeholder='Enter your message' />
            <button type='submit'>send</button>
        </form>
    )
}

export default reduxForm({ form: 'enterNewTextForm' })(EnterNewTextForm);
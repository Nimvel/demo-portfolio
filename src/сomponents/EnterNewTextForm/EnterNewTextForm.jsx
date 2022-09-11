import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../FormsControls/FormsControls';
import { maxLengthCreator, required } from '../FormsControls/validators/validators';

import style from './EnterNewTextForm.module.css';

const maxLength15 = maxLengthCreator(15);

const EnterNewTextForm = (props) => {
    const TextArea = FormElement('textarea');
    return (
        <form onSubmit={props.handleSubmit} className={style.new_text} >
            <Field component={TextArea} validate={[required, maxLength15]} name='newText' placeholder='Enter your message' />
            <button type='submit'>send</button>
        </form>
    )
}

export default reduxForm({ form: 'enterNewTextForm' })(EnterNewTextForm);
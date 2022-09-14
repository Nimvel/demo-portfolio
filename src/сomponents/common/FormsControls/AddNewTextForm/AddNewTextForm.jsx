import { Field, reduxForm } from 'redux-form'
import { FormElement } from '../FormsControls';
import { maxLengthCreator, required } from '../validators/validators';

import style from './AddNewTextForm.module.css';

const maxLength15 = maxLengthCreator(15);

const AddNewTextForm = (props) => {
    const TextArea = FormElement('textarea');
    return (
        <form onSubmit={props.handleSubmit} className={style.new_text} >
            <Field component={TextArea} validate={[required, maxLength15]} name='newText' placeholder='Enter your message' />
            <button type='submit'>send</button>
        </form>
    )
}

export default reduxForm({ form: 'addNewTextForm' })(AddNewTextForm);
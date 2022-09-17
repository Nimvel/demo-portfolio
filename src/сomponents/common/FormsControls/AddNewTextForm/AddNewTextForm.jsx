import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../FormsControls';
import { maxLengthCreator } from '../validators/validators';

import style from './AddNewTextForm.module.css';

const maxLength15 = maxLengthCreator(15);

const AddNewTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.new_text} >
            <Field autoFocus component={Textarea} validate={[maxLength15]} name='newText' placeholder='Enter your message' />
            <button type='submit'>send</button>
        </form>
    )
}

export default reduxForm({ form: 'addNewTextForm' })(AddNewTextForm);
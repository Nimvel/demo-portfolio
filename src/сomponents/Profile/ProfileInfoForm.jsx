import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../common/FormsControls/FormsControls';
import { required } from '../common/FormsControls/validators/validators';
import { ContactElement } from './ProfileInfo';

import styles from './Profile.module.scss';
import styleError from '../common/FormsControls/FormsControls.module.css'

const ProfileInfoForm = ({ profile, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.profileDataForm}>
            <div> <b>fullName:</b>
                {createField(Input, [required], 'fullName', '', 'Enter your name')}
            </div>
            <div> <b>aboutMe:</b>
                {createField(Textarea, [required], 'aboutMe', '', 'Tell about yourself')}
            </div>
            <div> <b>lookingForAJob:</b>
                <Field className={styles.profileDataForm_checkbox} component={Input} name='lookingForAJob' type='checkbox' /> 
            </div>
            <div> <b>Skills:</b>
                {createField(Textarea, [], 'lookingForAJobDescription', '', 'Tell about your skills')}
                <div className={styles.contacts}>
                    {Object.keys(profile.contacts).map(key => <ContactElement key={key} contactsKey={key}
                        contactsValue={createField(Input, [], 'contacts.' + key, '', key)} />)}
                    {props.error && <span className={styleError.loginFormError} >{props.error}</span>}
                </div>
            </div>
            <button>Save</button>
        </form>
    )
}

const ProfileInfoFormRedux = reduxForm({ form: 'profile', enableReinitialize: true, destroyOnUnmount: false })(ProfileInfoForm)


export default ProfileInfoFormRedux;
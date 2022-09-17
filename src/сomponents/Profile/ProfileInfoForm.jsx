import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../common/FormsControls/FormsControls';
import { required } from '../common/FormsControls/validators/validators';
import { ContactElement } from './ProfileInfo';
import style from './Profile.module.css';

const ProfileInfoForm = ({ profile, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.profileData}>
            <div> <b>fullName:</b>
                {createField(Input, [required], 'fullName', '', 'Enter your name')}
            </div>
            <div> <b>aboutMe:</b>
                {createField(Textarea, [required], 'aboutMe', '', 'Tell about yourself')}
            </div>
            <div> <b>lookingForAJob:</b>
                {createField(Input, [], 'lookingForAJob', 'checkbox', null)}
            </div>
            <div> <b>Skills:</b>
                {createField(Textarea, [], 'lookingForAJobDescription', '', 'Tell about your skills')}
                <div className={style.contacts}>
                    {Object.keys(profile.contacts).map(key => <ContactElement key={key} contactsKey={key}
                        contactsValue={createField(Input, [], key, '', key)} />)}
                </div>
            </div>
            <button>save</button>
        </form>
    )
}

const ProfileInfoFormRedux = reduxForm({ form: 'profile' })(ProfileInfoForm)


export default ProfileInfoFormRedux;
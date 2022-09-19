import React from 'react';
import ProfileStatus from './ProfileStatus';

import styles from './Profile.module.scss';

const ProfileInfo = ({ profile, isAuthUserProfile, ...props }) => {
    return (
        <div className={styles.profileData}>
            <div><b> {profile.fullName} </b></div>
            <div className={styles.profileData__status}>
                {isAuthUserProfile
                    ? <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    : <span>{props.status || '------'}</span>}
            </div>
            <div> <b>about me:</b> {profile.aboutMe} </div>
            <div> <b>looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'} </div>
            {profile.lookingForAJob && <div> <b>skills:</b> {profile.lookingForAJobDescription} </div>}
            <div><b>contacts:</b></div>
            {Object.keys(profile.contacts).map(key => <ContactElement key={key} contactsKey={key} contactsValue={profile.contacts[key]} />)}
        </div>
    )
}


export const ContactElement = ({ contactsKey, contactsValue, ...props }) => {
    return <div className={styles.profileData__contact} ><b>{contactsKey}: </b>
        {contactsValue
            ? <a href={contactsValue} target='_blank' >{contactsValue}</a>
            : '---'}
    </div>
}

export default ProfileInfo;
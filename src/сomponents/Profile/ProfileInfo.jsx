import React from 'react';
import style from './Profile.module.css';

const ProfileInfo = ({ profile, isAuthUserProfile, ...props }) => {
    return (
        <div>
            <div className={style.profileData}>
                {isAuthUserProfile && <button onClick={props.onClickEditProfile} >Edit profile</button>}
                <div> <b>name:</b> {profile.fullName} </div>
                <div> <b>about me:</b> {profile.aboutMe} </div>
                <div> <b>looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'} </div>
                {profile.lookingForAJob && <div> <b>skills:</b> {profile.lookingForAJobDescription} </div>}
            </div>
            <div className={style.contacts}>
                <b>contacts:</b>
                {Object.keys(profile.contacts).map(key => <ContactElement key={key} contactsKey={key} contactsValue={profile.contacts[key]} />)}
            </div>
        </div>
    )
}


export const ContactElement = ({ contactsKey, contactsValue, ...props }) => {
    return <div className={style.contact} ><b>{contactsKey}: </b>{contactsValue}</div>
}

export default ProfileInfo;
import React from 'react';

import Preloader from '../common/Preloader/Preloader';
import styles from './Profile.module.scss';
// import ProfileStatus from './ProfileStatus';
import userPhoto from '../../assets/icons/comrade.png';
import ProfileInfoFormRedux from './ProfileInfoForm';
import ProfileInfo from './ProfileInfo';

const Profile = ({ profile, status, isAuthUserProfile, editMode, ...props }) => {
    if (!profile) {
        return <Preloader />
    }

    let addNewProfilePhoto = (e) => {
        if (e.target.files.length) {
            props.saveNewProfilePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={styles.profilePage}>
            <div className={styles.holder}>
                <img src={profile.photos.large || userPhoto} alt='avatar' />
                {isAuthUserProfile && <div className={styles.block}>
                    <label>
                        <input onChange={addNewProfilePhoto}
                            type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />
                        <span>Send photo</span>
                    </label>
                </div>}
            </div>

            {/* <div className={styles.profilePage__status}>
                {isAuthUserProfile
                    ? <ProfileStatus status={status} updateStatus={props.updateStatus} />
                    : <span>{status || '------'}</span>}
            </div> */}
            {isAuthUserProfile && <button onClick={props.onClickEditProfile} >Edit profile</button>}
            {editMode
                ? <ProfileInfoFormRedux initialValues={profile} profile={profile} 
                status={status} updateStatus={props.updateStatus}
                onSubmit={props.onSubmit} />
                : <ProfileInfo profile={profile} isAuthUserProfile={isAuthUserProfile} 
                status={status} updateStatus={props.updateStatus}
                onClickEditProfile={props.onClickEditProfile} />
            }
        </div>
    )
}

export default Profile;



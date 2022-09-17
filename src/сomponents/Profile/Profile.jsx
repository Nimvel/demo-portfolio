import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../assets/icons/comrade.png';
import React from 'react';
import ProfileInfoFormRedux from './ProfileInfoForm';
import ProfileInfo from './ProfileInfo';

const Profile = ({ profile, status, updateStatus, isAuthUserProfile, editMode, ...props }) => {
    if (!profile) {
        return <Preloader />
    }

    let addNewProfilePhoto = (e) => {
        if (e.target.files.length) {
            props.saveNewProfilePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={style.profilePage}>
                <div className={style.holder}>
                    <img src={profile.photos.large || userPhoto} alt='avatar' />
                    {isAuthUserProfile &&
                    <div className={style.block}>
                        <label className={style.file__label}>
                            <input className={style.file__input} id='file__input_1' onChange={addNewProfilePhoto}
                                type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />
                            <span className={style.file__text}>Send photo</span>
                        </label>
                    </div>}
                </div>

                <div className={style.status}>
                    {isAuthUserProfile
                        ? <ProfileStatus status={status} updateStatus={updateStatus} />
                        : <span>{status || '------'}</span>}
                </div>
                {editMode
                    ? <ProfileInfoFormRedux profile={profile} onSubmit={props.onSubmit} />
                    : <ProfileInfo profile={profile} isAuthUserProfile={isAuthUserProfile} onClickEditProfile={props.onClickEditProfile} />
                }
        </div>
    )
}

export default Profile;



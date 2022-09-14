import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../assets/icons/comrade.png';


const Profile = ({ profile, status, updateStatus, getStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    // let lastFeature = profileData.aboutMe.length;

    // let skills = profileData.skills.map(s =>
    //         <a key={s.id} href={s.url} target='_blank' >
    //             <li className={style.skill} >{s.skill}</li>
    //         </a>

    // )

    // let aboutMe = profileData.aboutMe.map(f => f.id != lastFeature
    //     ? <span className={style.feature} key={f.id}> {f.feature},</span>
    //     : <span className={style.feature} key={f.id}> {f.feature}.</span>)

    // let education = profileData.education.map(e =>
    //     <a key={e.id} href={e.url} target='_blank' >
    //     <li className={style.speciality} key={e.id}>{`${e.level} - ${e.educationalInstitution}: ${e.speciality}`}</li>
    //     </a>)

    // let languages = profileData.languages.map(l =>
    //     <li className={style.language} key={l.id}>{`${l.language} - ${l.level}`}</li>)
    return (
        <div className={style.profilePage}>
            <div>
                <img src={profile.photos.large ? profile.photos.large : userPhoto} alt='avatar' />
            </div>
            <div>
                <div>
                    {profile.fullName}
                </div>
                <div>
                    {profile.aboutMe}
                </div>
                <div className={style.status}>
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </div>
            </div>

            {/* <div className={style.short_description}>
                <div className={style.avatar}>
                    <img src={profileData.avatarULR} />
                </div>
                <div className={style.name}>{props.profile.userName}</div>
                <div className={style.job_title}>{profileData.jobTitle}</div>
                <div className={style.status}>{props.profile.status}</div>
            </div>
            <div className={style.description}>
                <div className={style.skills}>Навыки: {skills}</div>
                <div className={style.education}>Образование: {education}</div>
                <div className={style.languages}>Языки: {languages}</div>
                <div className={style.about_me}>О себе: {aboutMe}</div>
            </div> */}
        </div>
    )
}

export default Profile;

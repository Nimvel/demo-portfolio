import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.css';

const Profile = (props) => {
    if (!props.profile) {
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
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
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

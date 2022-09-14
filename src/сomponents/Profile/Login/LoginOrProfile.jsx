import Preloader from '../../common/Preloader/Preloader';
import { LoginFormRedux } from '../../Login/LoginPage';
import ProfileStatus from '../ProfileStatus';
import style from './LoginOrProfile.module.css';

const LoginOrProfile = ({ isAuth, logIn, profile, status, updateStatus, getStatus }) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        logIn({ email, password, rememberMe })
    }

    if (!profile) {
        return <Preloader />
    }

    if (isAuth) {
        return <div className={style.profilePage}>
            <div>
                <img src={profile.photos.small} /> Small photo
            </div>
            <div>
                <div>
                    {profile.fullName}
                </div>
                <div className={style.status}>
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    }
    else if (!isAuth) {
        return <LoginFormRedux onSubmit={onSubmit} />
    }
}

export default LoginOrProfile;

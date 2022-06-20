import { NavLink } from 'react-router-dom';
import style from './Comrade.module.css';

const Comrade = ({ comradeImg, comradeName, comradeId, lastMessage }) => {
    return (
        <NavLink to={`/dialogs/${comradeId}`} className={linkActive => linkActive.isActive ? style.active : style.item} >
            <div className={style.dialog}>
                <img src={comradeImg} alt='comrade avatar' className={style.comrade_img} />
                <span className={style.comrade_name}>
                    {comradeName}
                </span>
                <span className={style.comrade_message}>{lastMessage}</span>
            </div>
        </NavLink>
    )
}

export default Comrade;

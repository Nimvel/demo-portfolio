import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = ({ isAuth, login }) => {
    return <div className={style.login}>
        {!isAuth ? <NavLink to='/login'>Log in</NavLink> : login}
    </div>
}

export default Header;

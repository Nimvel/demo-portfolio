import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = ({ isAuth, logOut }) => {
    return <div className={style.login}>
        {!isAuth
            ? <NavLink to='/login'>Log in</NavLink>
            : <button onClick={logOut}>Log Out</button> }
    </div>
}

export default Header;

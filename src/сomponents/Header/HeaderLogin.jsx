import { NavLink } from "react-router-dom";

const HeaderLogin = (props) => {
    if (!props.isAuth) {
        return <NavLink to='/login'>Login</NavLink>
    }
    else {
        return props.login
    }

}

export default HeaderLogin;

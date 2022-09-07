import style from './Header.module.css'
import HeaderLogin from './HeaderLogin';

const Header = (props) => {
    return (
        <div>
           <div className={style.login}>
               <HeaderLogin {...props} />
           </div>
        </div>
    )
}

export default Header;

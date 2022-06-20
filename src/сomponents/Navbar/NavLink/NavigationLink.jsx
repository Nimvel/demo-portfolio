import style from '../Navbar.module.css';
import { StyledNavLink } from './StyledNavLink';

const NavigationLink = ({ navData }) => {

    let navLinkElements = navData.map(n =>
        <div className={style[n.name]} key={n.id}>
            <StyledNavLink to={`/${n.name}`} name={n.name} />
        </div>)

    return (
        <div className={style.navigation}>
            {navLinkElements}
        </div>
    )
}

export default NavigationLink;
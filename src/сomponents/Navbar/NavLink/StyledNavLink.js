import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import profile from "../../../assets/icons/profile.png";
import profile_active from "../../../assets/icons/profile_active.png";
import posts from "../../../assets/icons/posts.png";
import posts_active from "../../../assets/icons/posts_active.png";
import dialogs from "../../../assets/icons/dialogs.png";
import dialogs_active from "../../../assets/icons/dialogs_active.png";
import friends from "../../../assets/icons/friends.png";
import friends_active from "../../../assets/icons/friends_active.png";
import users from "../../../assets/icons/users.png";
import users_active from "../../../assets/icons/users_active.png";
import settings from "../../../assets/icons/settings.png"
import settings_active from "../../../assets/icons/settings_active.png"
import photos from "../../../assets/icons/photos.png"
import photos_active from "../../../assets/icons/photos_active.png"

let images = {
    profile,
    profile_active,
    posts,
    posts_active,
    dialogs,
    dialogs_active,
    friends,
    friends_active,
    users,
    users_active,
    settings,
    settings_active,
    photos,
    photos_active
}

let min_size = '30px'
let size = '35px';

export const StyledNavLink = styled(NavLink)`
${props => props.name && css`
        position: relative;
        background: url(${images[props.name]});
        display: block;
        
        background-size: ${size};
        width: ${size};
        height: ${size};

    &:hover {
        background-image: url(${images[props.name + "_active"]});
        transform: scale(1.2);
        
    }
    &.active{
        background-image: url(${images[props.name + "_active"]});
    }
    &.active:hover {
        transform: scale(1.2);
    }
    @media (max-width: 1100px) {
        background-size: ${min_size};
        width: ${min_size};
        height: ${min_size};
    } 
}
`}`;


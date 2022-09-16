import { connect } from 'react-redux';

import style from './Photos.module.css';
import Photo from './Photo';
import ActiveFriends from '../Friends/ActiveFriends';
import React from 'react';

const Photos = ({ photosData }) => {

    let photosElements = photosData.map(p => <Photo key={p.id} photo={p.photo} />)

    return (
        <div className={style.photosPage}>
            <div className={style.photos}>
                {photosElements}
            </div>
            <div className={style.active_friends}>
                <ActiveFriends />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        photosData: state.photos.photosData
    }
}

export default connect(mapStateToProps, {})(Photos);

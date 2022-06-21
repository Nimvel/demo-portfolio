import style from './Photos.module.css';
import Photo from './Photo';
import ActiveFriends from '../Friends/ActiveFriends';

const Photos = ({ photosData, bigPhoto }) => {
    let photosElements = photosData.map(p => <Photo key={p.id} id={p.id} 
        photo={p.photo} classes={p.classes} bigPhoto={bigPhoto} />)
        
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

export default Photos;

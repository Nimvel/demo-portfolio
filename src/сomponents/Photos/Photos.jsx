import style from './Photos.module.css';
import Photo from './Photo';
import ActiveFriends from '../Friends/ActiveFriends';

const Photos = ( {photosPage, ...props} ) =>  {
    let photosElements = photosPage.photosData.map (p => <Photo key={p.id} photo={p.photo}/>)
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

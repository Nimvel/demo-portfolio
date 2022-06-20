import style from './Photos.module.css';

const Photo = ( {photo, ...props} ) =>  {
    return (
        <div className={style.photo}>
            <img src={photo} alt='photo' />
            
        </div>
    )
}

export default Photo;

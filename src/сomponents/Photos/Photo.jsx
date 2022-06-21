import style from './Photos.module.css';
// import './Photo.css';

const Photo = ({ id, photo, classes, bigPhoto }) => {
    let onClickSmallPhoto = () => {
        bigPhoto(id)
    }
    return (
        <div>
            <div className={style[classes]} onClick={onClickSmallPhoto}>
                <img src={photo} alt='photo' />
            </div>
        </div>


    )
}

export default Photo;



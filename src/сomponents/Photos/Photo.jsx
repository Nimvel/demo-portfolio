import style from './Photos.module.css';
import '../../App.js';
// import './Photo.css';

const Photo = ({ id, photo, classes, screenStyle, bigPhoto, fullScreen }) => {
    let onClickSmallPhoto = () => {
        bigPhoto(id)
    }

    // let onFullScreen = () => {
    //     fullScreen(id)
    // }
    return (
        // <div className={screenStyle} onClick={onFullScreen}>
        <div>
            <div className={style[classes]} onClick={onClickSmallPhoto}>
                <img src={photo} alt='photo' />
            </div>
        </div>


    )
}

export default Photo;



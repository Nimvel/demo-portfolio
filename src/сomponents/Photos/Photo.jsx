import style from './Photos.module.css';
import '../../App.js';
import React from 'react';

const Photo = ({ photo, ...props }) => {
    let [isClicked, setIsClicked] = React.useState(false);
    React.useEffect(() => { }, [isClicked])

    const onImageResizing = () => {
        setIsClicked(!isClicked)
    }

    return <div className={isClicked ? style.full_screen : style.photo} onClick={onImageResizing}>
        <img src={photo} alt='image' />
    </div>
}

export default Photo;
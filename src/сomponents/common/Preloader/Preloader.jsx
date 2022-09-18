import style from './Preloader.module.css';
import preloader from './preloader.svg';

const Preloader = () => {
    return <div className={style.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader;
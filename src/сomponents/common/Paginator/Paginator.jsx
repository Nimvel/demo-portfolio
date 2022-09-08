import style from './Paginator.module.css';

const Paginator = ({ pages, currentPage, onPageChanged }) => {
    return <div className={style.paginator} >
        {pages.map(p => {
            if (p === 1 || (p >= currentPage - 2 && p <= currentPage + 2) || p === pages.length) {
                return <span className={currentPage === p ? style.selectedPage : ''}
                    onClick={(e) => { onPageChanged(p) }} > {p} </span>
            }

            else if (p === currentPage - 3 || p === currentPage + 3) {
                return <span>...</span>
            }
        })}
    </div>
}

export default Paginator
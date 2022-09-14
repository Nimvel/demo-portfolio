import style from './Paginator.module.css';

const Paginator = ({ pages, currentPage, onPageChanged, previousTenPages, previousPage, nextPage, nextTenPages }) => {
    return <div className={style.paginator} >
        {currentPage > 10 && <button onClick={previousTenPages}>{'<<'}</button>}
        {currentPage > 1 && <button onClick={previousPage}>{'<'}</button>}
        {pages.map(p => {
            if (p === 1 || (p >= currentPage - 2 && p <= currentPage + 2) || p === pages.length) {
                return <span key={pages.indexOf(p)} className={currentPage === p ? style.selectedPage : ''}
                    onClick={(e) => { onPageChanged(p) }} > {p} </span>
            }

            else if (p === currentPage - 3 || p === currentPage + 3) {
                return <span key={pages.indexOf(p)}>...</span>
            }
        })}
        {currentPage <= pages.length - 1 && <button onClick={nextPage}>{'>'}</button>}
        {currentPage <= pages.length - 10 && <button onClick={nextTenPages}>{'>>'}</button>}
    </div>
}

export default Paginator
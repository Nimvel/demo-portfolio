import { FC } from 'react'
import style from './Paginator.module.css'

type PaginatorProps = {
    count: number
    size: number
    currentPage: number
    onPageChanged: (p: number) => void
    getUsers: (newCurrentPage: number, size: number) => void
    setCurrentPage: (newCurrentPage: number) => void
}

const Paginator: FC<PaginatorProps> = ({ count, size, currentPage, onPageChanged, getUsers, setCurrentPage }) => {
    const pages: Array<number> = []
    const pagesCount = Math.ceil(count / size)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const previousTenPages = () => {
        const newCurrentPage = currentPage - 10
        currentPage > 10 && setCurrentPage(newCurrentPage)
        getUsers(newCurrentPage, size)
    }

    const previousPage = () => {
        const newCurrentPage = currentPage - 1
        currentPage > 1 && setCurrentPage(newCurrentPage)
        getUsers(newCurrentPage, size)
    }

    const nextPage = () => {
        const newCurrentPage = currentPage + 1
        currentPage <= pages.length - 1 && setCurrentPage(newCurrentPage)
        getUsers(newCurrentPage, size)
    }

    const nextTenPages = () => {
        const newCurrentPage = currentPage + 10
        currentPage <= pages.length - 10 && setCurrentPage(newCurrentPage)
        getUsers(newCurrentPage, size)
    }

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
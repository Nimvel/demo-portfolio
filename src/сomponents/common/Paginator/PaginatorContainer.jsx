import React from 'react';

import Paginator from './Paginator';

class PaginatorContainer extends React.Component {
    previousTenPages = () => {
        this.props.currentPage > 10 && this.props.setCurrentPage(this.props.currentPage - 10);
        this.props.getUsers(this.props.currentPage - 10, this.props.size);
    }

    previousPage = () => {
        this.props.currentPage > 1 && this.props.setCurrentPage(this.props.currentPage - 1);
        this.props.getUsers(this.props.currentPage - 1, this.props.size);
    }

    nextPage = () => {
        this.props.currentPage <= this.props.pages.length - 1 && this.props.setCurrentPage(this.props.currentPage + 1);
        this.props.getUsers(this.props.currentPage + 1, this.props.size);
    }

    nextTenPages = () => {
        this.props.currentPage <= this.props.pages.length - 10 && this.props.setCurrentPage(this.props.currentPage + 10);
        this.props.getUsers(this.props.currentPage + 10, this.props.size);
    }

    render() {
        return <Paginator pages={this.props.pages}
            currentPage={this.props.currentPage} onPageChanged={this.props.onPageChanged}
            previousPage={this.previousPage} nextPage={this.nextPage}
            previousTenPages={this.previousTenPages} nextTenPages={this.nextTenPages} />
    }
}

export default PaginatorContainer;
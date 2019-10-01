import React from 'react';

export type PaginationProps = {
    currentPage: number;
    productsPerPage: number;
    totalProducts: number;
    paginate: any;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='ui horizontal list'>
                {pageNumbers.map(number => (
                    <div
                        key={number}
                        className='item'
                        style={(currentPage === number) ? {fontWeight: "bold"} : {}}
                        onClick={() => paginate(number)}>
                        {number}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Pagination;

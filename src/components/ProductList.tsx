import React, { useState, useEffect } from 'react';
import httpService from "../services/http.service";
import { Product } from '../types/product.type';
import Products from './Products';
import Pagination from "./Pagination";


const ProductListComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    useEffect( () => {
        httpService.getProducts().then((response: any) => {
            setProducts(response.data.todos);
        })
        .catch((error: Error) => {
            console.log(error);
        });
    }, []);

    // Get current posts
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <React.Fragment>
            <Products products={currentProducts} />
            <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate} />
        </React.Fragment>
    )
};

export default ProductListComponent;

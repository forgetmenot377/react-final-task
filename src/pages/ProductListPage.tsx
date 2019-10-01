import React from 'react';
import { withRouter } from "react-router";
import FiltersComponent from '../components/Filters';
import ProductListComponent from "../components/ProductList";

const ProductListPage = (props: any) => {
    return (
        <React.Fragment>
            <FiltersComponent />
            <ProductListComponent />
        </React.Fragment>
    )
};

export default withRouter(ProductListPage);

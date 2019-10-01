import React from 'react';
import { Product } from '../types/product.type';

export type ProductsProps = {
    products: Product[];
};

const Products: React.FC<ProductsProps> = (props) => {
    return (
        <div className="ui relaxed two column grid">
            <ul className="two column row">
                {props.products && props.products.map((product: Product) =>
                    <li className="ui card column" key={product.id}>
                        <div className="image">
                            <img src={product.image} alt="product"/>
                        </div>
                        <div className="ui rating">{product.rating}</div>
                        <div className="content">
                            <p className="header">{product.name}</p>
                            <div className="description">
                                {product.description}
                            </div>
                        </div>
                        <div className="extra content">
                            <p>${product.cost}</p>
                            <button className="ui primary button">
                                Delete
                            </button>
                            <button className="ui button">
                                Details
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </div>

    )
};

export default Products;

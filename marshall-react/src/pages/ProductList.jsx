import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
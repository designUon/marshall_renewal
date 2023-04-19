import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "제품1", price: 1000, image: "image1.jpg" },
        { id: 2, name: "제품2", price: 2000, image: "image2.jpg" },
        { id: 3, name: "제품3", price: 3000, image: "image3.jpg" },
        // 제품 데이터를 추가로 작성합니다.
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
export {ProductContextProvider};
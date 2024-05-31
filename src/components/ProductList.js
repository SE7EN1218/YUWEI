// src/components/ProductList.js
import React from 'react';
import products from '../data/products';
import './ProductList.css'; // 確保有相應的 CSS 文件來樣式化產品列表

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>價格: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

// src/components/ProductList.js
import React from 'react';

const products = [
  { id: 1, name: '雞胸肉', price: '￥69.99/公斤' },
  { id: 2, name: '雞腿肉', price: '￥59.99/公斤' },
  { id: 3, name: '雞翅', price: '￥49.99/公斤' },
];

const ProductList = () => (
  <ul>
    <h1>產品列表</h1>
    {products.map(product => (
      <li key={product.id}>{product.name} - {product.price}</li>
    ))}
  </ul>
);

export default ProductList;

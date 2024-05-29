// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h1>標題組件</h1>
    <nav>
      <ul>
        <li><Link to="/">主頁</Link></li>
        <li><Link to="/products">產品</Link></li>
        <li><Link to="/contact">聯繫我們</Link></li>
        <li><Link to="/about">關於我們</Link></li>
        <li><Link to="/login">登录</Link></li>
        <li><Link to="/register">注册</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

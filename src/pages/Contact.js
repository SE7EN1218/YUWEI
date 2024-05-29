// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('請輸入有效的電子郵件地址');
      return;
    }
    setError('');
    setLoading(true);
    try {
      // 假设你的后端服务器在 /api/contact 路径上接受 POST 请求
      await axios.post('/api/contact', { name, email, message });
      setSubmitted(true);
    } catch (error) {
      console.error('提交表單時出錯:', error);
      setError('提交表單時出錯，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>聯繫我們</h1>
      {submitted ? (
        <p>感謝您的聯繫，我們將盡快回覆您！</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">姓名:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">電子郵件:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label htmlFor="message">訊息:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? '提交中...' : '發送'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode 会在开发模式下渲染两次
    // 一次是正常渲染，一次是严格模式渲染，用于检查组件是否存在不符合预期的行为
    // 比如使用了过时的生命周期函数或者使用了不安全的生命周期函数，或者使用了不推荐使用的 API 等等。
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

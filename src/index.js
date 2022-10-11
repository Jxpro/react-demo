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
        {/* HashRouter使用的是URL的hash部分(#)，而BrowserRouter使用的是浏览器的history API */}
        {/* 上述同Vue的路由模式 */}

        {/* 因此使用BrowserRouter需要后端支持来配合使用，将所有404的请求都重定向到index.html */}
        {/* serve - s build 中的 -s 参数就是用来支持这个功能的，它会将所有请求都重定向到index.html */}

        {/* 而HashRouter不需要，因为它是基于URL的hash部分的，会忽略掉URL中的hash部分 */}
        {/* 所以使用HashRouter的话，可以直接使用 serve build 来启动服务 */}

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

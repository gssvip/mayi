// 运行时后端地址配置（index.html 在主包前同步加载本文件）
// 本目录的静态产物只用于无后端的静态托管（GitHub Pages / EdgeOne Pages 等）；
// Render 生产站用的是 source/backend/static，与本目录无关。
// 因此这里无条件把 API 指向 Render 后端，避免 /api/* 打到静态主机返回 405。
(function () {
  try {
    window.__APP_ENV__ = window.__APP_ENV__ || {};
    window.__APP_ENV__.VITE_API_URL = 'https://fanshu-writer-backend.onrender.com/api';
  } catch (e) {}
})();

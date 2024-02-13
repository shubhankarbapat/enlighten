// src/setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000", // Replace your_backend_port with the port your backend service is running on
      changeOrigin: true,
      cookieDomainRewrite: "localhost",
      secure: false, // Set this to true if your backend service is using HTTPS
    })
  );
};

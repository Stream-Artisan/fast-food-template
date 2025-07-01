const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { createProxyMiddleware } = require("http-proxy-middleware");
const { createProxy } = require("./proxy");
const { createServer } = require("http");
const { createServer: createHttpsServer } = require("https");
const fs = require("fs");

const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

// GET/posts 所有用户或者特定用户的文章页
// eg: GET /posts?author=xxx
route.get()
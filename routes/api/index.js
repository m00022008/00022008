const express = require('express');
const bookRouter = require('./book');

const router = express.Router();

// http://localhost:3000/api/book/* -> ./book.js
router.use('/book', bookRouter);

module.exports = router;
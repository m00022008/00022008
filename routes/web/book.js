const express = require('express');
const bookController = require('../../controllers/book');
const router = express.Router();

// http://localhost:3000/book
router.get('/', (req, res)=>{
    bookController.getAll(req, res)
});

router.get('/create', (req, res) => {
    res.render('book/create_update', { errors: [], book: {} })
});

router.get('/update/:id', (req, res)=>{
    bookController.getById(req, res)
});

module.exports = router;

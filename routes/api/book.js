const express = require('express');
const { bookValidationRules } = require('../../validators/book');
const bookController = require('../../controllers/book');
const router = express.Router();

router.post('/create', bookValidationRules(), bookController.create);
router.post('/update/:id', bookValidationRules(), bookController.update);
router.get('/delete/:id', bookValidationRules(), bookController.delete);

module.exports = router;

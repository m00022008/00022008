const { body } = require('express-validator');

const bookValidationRules = () => { 
  return [
    body('title')
      .notEmpty().withMessage('title must not be empty'),
    body('author')
      .notEmpty().withMessage('author must not be empty'),
    body('genre')
      .notEmpty().withMessage('genre must not be empty')
  ];
};

module.exports = {
  bookValidationRules
};
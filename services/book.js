const fs = require('fs');
const path = require('path');

if (!global.mock_db) {
  global.mock_db = path.join(__dirname, '../data', 'mock_db.json');
}

const books = require(global.mock_db);

const bookService = {
  // get all books
  get(req, res) {
    return books;
  },

  // get a book by ID
  getById(req, res) {
    const id = req.params.id;
    return books.find(item => item.id === id);
  },

  // insert a new book
  insert(req, res) {
    let new_id = genRandId(4);
    const body = req.body;
    const book = {
      title: body.title,
      author: body.author,
      genre: body.genre
    };

    books.push({
      id: new_id,
      book: book
    });

    writeToFile(books);
    
    return {
      id: new_id,
      book: book
    };
  },

  // update an existing book
  update(req, res) {
    const id = req.params.id;
    const index = books.findIndex(item => item.id === id);
    if (index === -1) {
      return null; // or you could throw an error
    }
    // update the book data
    books[index].book = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    };
    writeToFile(books);
    return books[index];
  },

  // delete a book
  delete(req, res) {
    const id = req.params.id;
    const index = books.findIndex(item => item.id === id);
    if (index === -1) {
      return false; // or you could throw an error
    }
    books.splice(index, 1);
    writeToFile(books);
    return true;
  }
};

// function for overwriting the json file with updated book data
let writeToFile = async (books) => {
  await fs.writeFileSync(
    global.mock_db,
    JSON.stringify(books, null, 4),
    'utf8'
  );
};

// generate a random id (similar to a simplified UUID)
let genRandId = (count) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = bookService;
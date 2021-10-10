const express = require('express');
const bodyParser = require('body-parser');

const booksControllers = require('./controllers/Books');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/books/:id', booksControllers.getById);
app.get('/books', booksControllers.getall);
app.post('/book/:id', booksControllers.update);
app.post('/book', booksControllers.create);
app.delete('/book/:id', booksControllers.remove);

app.listen(PORT, () => `API escutando na porta ${PORT}`);

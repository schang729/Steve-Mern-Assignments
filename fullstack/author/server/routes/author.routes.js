const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.post('/api/author', AuthorController.addNewAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.delete('/api/author/delete/:authorId', AuthorController.deleteAuthor);
    app.get('/api/author/:authorId', AuthorController.getAuthorById);
    app.put('/api/author/:authorId', AuthorController.updateAuthor);
    app.get('/api/author/sort/sort', AuthorController.getAuthorsBy);


}
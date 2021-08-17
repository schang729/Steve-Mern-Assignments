const Author = require("../models/author.model");

const addNewAuthor = (req,res) => {
    const { body } = req;
    Author.create({

        name: body.name,

    })
    .then(newAuthor => res.json(newAuthor))
    .catch((err) => 
        res.status(400).json({error:err}))



};

const getAllAuthors = (req,res) => {
    Author.find()
        .then((allAuthors)=> res.json({ allAuthors }))
        .catch((err) => 
        res.status(400).json({error:err}))
};
const getAuthorsBy = (req,res) => {
    Author.find().sort({name: 1})
        .then((allAuthors)=> res.json({ allAuthors }))
        .catch((err) => 
        res.status(400).json({error:err}))
};

const deleteAuthor = (req,res) =>{
    Author.deleteOne({ _id: req.params.authorId })
        .then((deletedAuthor) => res.status(200).send("Author Deleted"))
        .catch((err) => 
        res.status(400).json({error:err}))

};
const getAuthorById = (req,res) =>{
    Author.findOne({ _id: req.params.authorId })
        .then((author)=> res.json({author}))
        .catch((err) => 
        res.status(400).json({error:err}))

};

const updateAuthor = (req,res) =>{
    Author.findByIdAndUpdate(
        { _id: req.params.authorId },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ updatedAuthor}))
        .catch((err) => 
        res.status(400).json({error:err}))



}

module.exports ={
    addNewAuthor,
    getAllAuthors,
    getAuthorsBy,
    deleteAuthor,
    getAuthorById,
    updateAuthor,



}
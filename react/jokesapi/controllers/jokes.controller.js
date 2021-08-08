const Joke = require("../models/joke.model")

const getAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes)=> res.json({ jokes:allJokes}))
        .catch((err)=> res.json({ errorMessage: err}));
};

const addNewJoke = (req,res) => {

    Joke.create({
        joke: req.body.joke,
        content: req.body.content,


    })
    .then((newJoke)=> res.json({ joke: newJoke}))
    .catch((err) => res.json({ errorMessage: err }));

}
const getJokeById = (req,res) =>{
    Joke.findOne({ _id: req.params.jokeId })
        .then((joke)=> res.json({jokes: joke}))
        .catch((err)=> res.json({ errorMessage: err}));

}
const deleteJoke = (req,res) =>{
    Joke.deleteOne({ _id: req.params.jokeId })
        .then((result) => res.json({ result: result}))
        .catch((err)=> res.json({ errorMessage: err}));

};
const updateJoke = (req,res) =>{
    Joke.findOneAndUpdate(
        { _id: req.params.jokeId }, req.body,
       
        {
            new: true,
            runValidators: true 
            
        }

    )
        .then(updatedJoke => res.json({joke:updatedJoke}))
        .catch((err)=> res.json({ errorMessage: err}));



}


module.exports = {
    getAllJokes,
    addNewJoke,
    getJokeById,
    deleteJoke,
    updateJoke,
};
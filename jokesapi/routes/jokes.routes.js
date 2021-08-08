

const JokeController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post("/api/create", JokeController.addNewJoke);
    app.get("/api/joke/:jokeId", JokeController.getJokeById);
    app.put("/api/joke/update/:jokeId", JokeController.updateJoke);
    app.delete("/api/joke/delete/:jokeId", JokeController.deleteJoke);

};
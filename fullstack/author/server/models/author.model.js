const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Author Name is Required"],
            minLength: [3, "Author Name must be at least 3 characters"],

        },

    }

);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
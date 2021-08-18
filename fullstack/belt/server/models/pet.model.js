const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Pet Name is Required"],
            minLength: [3, "Pet Name must be at least 3 characters"],

        },
        type:{
            type: String,
            required: [true, "Pet Type is Required"],
            minLength: [3, "Pet Type must be at least 3 characters"],

        },
        description:{
            type: String,
            required: [true, "Pet Description is Required"],
            minLength: [3, "Pet Description must be at least 3 characters"],

        },
        skillOne:{
            type: String,

        },
        skillTwo:{
            type: String,
        },
        skillThree:{
            type: String,
        },
        

    },
    { timestamps: true }


);
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
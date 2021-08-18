const Pet = require("../models/pet.model");

const addNewPet = (req,res) => {
    const { body } = req;
    Pet.create({

        name: body.name,
        type: body.type,
        description: body.description,
        skillOne: body.skillOne,
        skillTwo: body.skillTwo,
        skillThree: body.skillThree,


    })
    .then(newPet => res.json(newPet))
    .catch((err) => 
        res.status(400).json({error:err}))



};
const getAllPets = (req,res) => {
    Pet.find()
        .then((allPets)=> res.json({ allPets }))
        .catch((err) => 
        res.status(400).json({error:err}))
};
const deletePet = (req,res) =>{
    Pet.deleteOne({ _id: req.params.petId })
        .then((deletedPet) => res.status(200).send("Pet Deleted"))
        .catch((err) => 
        res.status(400).json({error:err}))

};
const getPetById = (req,res) =>{
    Pet.findOne({ _id: req.params.petId })
        .then((pet)=> res.json({pet}))
        .catch((err) => 
        res.status(400).json({error:err}))

};
const updatePet = (req,res) =>{
    Pet.findByIdAndUpdate(
        { _id: req.params.petId },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ updatedPet}))
        .catch((err) => 
        res.status(400).json({error:err}))



}


module.exports ={ 
    addNewPet,
    getAllPets,
    deletePet,
    getPetById,
    updatePet






}
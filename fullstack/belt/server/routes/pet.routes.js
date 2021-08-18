const PetController = require('../controllers/pet.controller');
module.exports = (app) => {
    app.post('/api/pet', PetController.addNewPet);
    app.get('/api/pet', PetController.getAllPets);
    app.delete('/api/pet/delete/:petId', PetController.deletePet);
    app.get('/api/pet/:petId', PetController.getPetById);
    app.put('/api/pet/:petId', PetController.updatePet);
    // app.get('/api/author/sort/sort', AuthorController.getAuthorsBy);


}
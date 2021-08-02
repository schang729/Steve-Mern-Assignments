const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () =>{
    const newUser ={
        _id: faker.datatype.number(),
        firstName: faker.name.findName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
    return newUser;



}
const user = createUser();

const createCompany = () =>{
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),

        }


    };
    return newCompany;



}
const company = createCompany();


    

app.get("/api/users/new", (req, res) => {
    res.json( user );
});
app.get("/api/companies/new", (req, res) => {
    res.json( company );
});
app.get("/api/user/company", (req, res) => {
    res.json( [user, company] );
    
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );
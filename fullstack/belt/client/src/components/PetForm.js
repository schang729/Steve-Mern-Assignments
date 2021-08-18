import axios from "axios";
import React, { useState } from "react";
import { Link, navigate } from "@reach/router";

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");




    const createPet = (e) =>{
        e.preventDefault();
        const newPet = {name, type, description, skillOne, skillTwo, skillThree};

        axios.post("http://localhost:8000/api/pet/", newPet)
        .then((newPet)=> navigate("/"))
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);

        })


    }





    return ( 
        <div className="container">
        <h1>Pet Shelter</h1>
        <h3>Know a pet needing a home?</h3>
        <Link to="/">back to home</Link>
        <form onSubmit={ createPet }>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Pet Name:</label>
            <input type="text" className="form-control" name ="name"id="name" 
                onChange={(e) => setName(e.target.value)}
                value ={name}

            />
            {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Pet Type:</label>
            <input type="text" className="form-control" name ="type"id="type" 
                onChange={(e) => setType(e.target.value)}
                value ={type}

            />
            {errors.type ? <p>{errors.type.message}</p> : null}
            </div>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Pet Description:</label>
            <input type="text" className="form-control" name ="description"id="description" 
                onChange={(e) => setDescription(e.target.value)}
                value ={description}

            />
            {errors.description ? <p>{errors.description.message}</p> : null}

                </div>
                <h3>Skill optional</h3>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Skill One:</label>
                <input type="text" className="form-control" name ="description"id="description" 
                    onChange={(e) => setSkillOne(e.target.value)}
                    value ={skillOne}

                />
                </div>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Skill Two:</label>
                <input type="text" className="form-control" name ="description"id="description" 
                    onChange={(e) => setSkillTwo(e.target.value)}
                    value ={skillTwo}

                />
                </div>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Skill Three:</label>
                <input type="text" className="form-control" name ="description"id="description" 
                    onChange={(e) => setSkillThree(e.target.value)}
                    value ={skillThree}

                />
                </div>

            <button className="btn btn-primary">Add Pet</button>

        </form>

        </div>







     );
}
 
export default PetForm;







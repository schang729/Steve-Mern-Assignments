import { navigate, Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const { petId } = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${petId}`)
        .then((thisPet) => {
            console.log(thisPet.data.pet)
            setName(thisPet.data.pet.name)
            setType(thisPet.data.pet.type)
            setSkillOne(thisPet.data.pet.skillOne)
            setSkillTwo(thisPet.data.pet.skillTwo)
            setSkillThree(thisPet.data.pet.skillThree)
            setDescription(thisPet.data.pet.description)

        })
    }, []);
    const updatePet = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${petId}`, {
           name,
           type,
           description,
           skillOne,
           skillTwo,
           skillThree

        })
        .then((updatedPet) => navigate("/"))
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);

        })




    }





    return ( 
        <div className="container">
        <h1>Pet Shelter</h1>
        <h3>Edit {name}</h3>
        
        <Link to="/" >back to home</Link>
        
        <form onSubmit={updatePet}>
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
            <div>
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
            </div>

            <button className="btn btn-primary">Edit Pet</button>

        </form>


    </div>
        











     );
}
 
export default EditPet;
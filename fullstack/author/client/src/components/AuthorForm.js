import axios from "axios";
import React, { useState } from "react";
import { Link, navigate } from "@reach/router";



const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const createAuthor = (e) =>{
        e.preventDefault();
        const newAuthor = {name};

        axios.post("http://localhost:8000/api/author/", newAuthor)
        .then((newAuthor)=> navigate("/"))
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);

        })


    }


    return ( 
    
        <div className="container">
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <form onSubmit={ createAuthor }>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Author Name:</label>
                <input type="text" className="form-control" name ="name"id="name" 
                    onChange={(e) => setName(e.target.value)}
                    value ={name}
                    
                
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button className="btn btn-dark"><Link to="/">Cancel</Link></button>
                <button className="btn btn-primary">Add</button>

            </form>


        </div>

     );
}
 
export default AuthorForm;
import { navigate, Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";



const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const { authorId } = props;
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${authorId}`)
        .then((thisAuthor) => {
            console.log(thisAuthor.data.author)
            setName(thisAuthor.data.author.name)

        })
    }, []);

    const updateAuthor = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${authorId}`, {
           name,

        })
        .then((updatedAuthor) => navigate("/"))
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);

        })




    }
    return ( 
        <div className="container">
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h2>Edit this author</h2>
            <form onSubmit={updateAuthor}>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Author Name:</label>
                <input type="text" className="form-control" name ="name"id="name" 
                    onChange={(e) => setName(e.target.value)}
                    value ={name}
                    
                
                />
                {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button className="btn btn-dark"><Link to="/">Cancel</Link></button>
                <button className="btn btn-primary">Edit</button>

            </form>


        </div> 




    );
}
 
export default EditAuthor;
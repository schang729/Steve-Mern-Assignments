import axios from "axios";
import React, { useState } from "react";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const { formSubmitted, setFormSubmitted} = props;


    const createProduct = (e) => {
        e.preventDefault();

        const newProduct = {title, price, description};

        axios.post("http://localhost:8000/api/product/", newProduct)
        .then((newProduct) => {
        
        setTitle("");
        setPrice("");
        setDescription("");
        setFormSubmitted(!formSubmitted);

        })
        .catch((err)=> {
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);


        })
    
       
    };

    return (  
        <>
       
            <h1>Product Form</h1>
            <form onSubmit={ createProduct}>
                <div >
                    <label>Title: </label>
                    <input
                        
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value ={title}

                    />
                    {errors.title ? <p>{errors.title.message}</p> : null}

                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value ={price}

                    />
                    {errors.price ? <p>{errors.price.message}</p> : null}

                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value ={description}

                    />
                    {errors.description ? <p>{errors.description.message}</p> : null}

                </div>
                
                <button className="btn btn-primary">Submit</button>



                
            </form>
            
            
            {/* {errors ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          )) : null} */}


            <hr></hr>
            





        </>
    );
}
 
export default ProductForm;
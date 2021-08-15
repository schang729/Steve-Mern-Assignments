import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditProduct = (props) => {
    const { productId } = props 
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${productId}`)
        .then((thisProduct) => {

            console.log(thisProduct.data.product)
            setTitle(thisProduct.data.product.title)
            setPrice(thisProduct.data.product.price)
            setDescription(thisProduct.data.product.description)
        

        })
        .catch((err) => console.log(err))





    }, []);

    const updateProduct = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${productId}`, {
            title,
            price,
            description,

        })
        .then((updatedProduct) => navigate("/"))
        .catch((err)=> console.log(err))



    }
    
    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit={updateProduct} >
                <div>
                    Title:{" "}
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value ={title}

                    />
                    {/* {errors.title ? <p>{errors.title.message}</p> : null} */}

                </div>
                <div>
                    Price:{" "}
                    <label>Price: </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value ={price}

                    />
                    {/* {errors.price ? <p>{errors.price.message}</p> : null} */}

                </div>
                <div>
                    Description:{" "}
                    <label>Description: </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value ={description}

                    />
                    {/* {errors.description ? <p>{errors.description.message}</p> : null} */}

                </div>
                <button>Update</button>



                
            </form>
            



        </div>


      )
    
    
    ;
}
 
export default EditProduct;
import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";


const DisplayProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { formSubmitted, setFormSubmitted } = props;

    useEffect(() => {
        console.log("triggered ")
        axios.get("http://localhost:8000/api/product/")
            .then(allProducts=>setProducts(allProducts.data.allProducts))
            .catch((err)=> console.log(err));
            
  
    }, [formSubmitted]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response) => {
            console.log("delete done")
            setFormSubmitted(!formSubmitted)
        })


        .catch((err)=> console.log("error while deleteing", err))

    }
    return ( 
        <div>
            <h1>Display all products</h1>

            {products.length > 0 && products.map((product, index) => (
                <div key={index}>
                    <Link to={`/${product._id}/edit`}>Edit</Link>
                    
                    <p><Link to={`/${product._id}/`}>{product.title}</Link></p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    {/* <img src = {product.photoUrl}/> */}
                    <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
                    <hr></hr>



                </div>


            ))}




        </div>






     );
}
 
export default DisplayProducts;
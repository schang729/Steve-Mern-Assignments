import React, { useState } from "react";
import DisplayProducts from "../components/DisplayProducts";
import ProductForm from "../components/ProductForm";

const Main = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    return(

        <div>
            <ProductForm 
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
            />
            <DisplayProducts
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
       
            />
   
     

        </div>



    )


}
export default Main;
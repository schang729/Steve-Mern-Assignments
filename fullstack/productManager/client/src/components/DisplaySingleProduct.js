
import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const DisplaySingleProduct = (props) => {
    const {productId} = props;
    const [productInfo, setProductInfo] = useState();
    useEffect(() => {
        console.log("gotProduct")
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(singleProducts=>setProductInfo(singleProducts.data.product))
            .catch((err)=> {console.log(err);})
            
  
    }, []);



    return ( 
        <div>
            <h1>Product Detail</h1>
            {productInfo ? (
                <div>
                    <p>{productInfo.title}</p>
                    <p>{productInfo.price}</p>
                    <p>{productInfo.description}</p>





                </div>





            ) : (
                <h1>Page is Loading</h1>



            )
            
            }
        </div>



     );
}
 
export default DisplaySingleProduct;
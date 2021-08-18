
import { navigate, Link } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const DisplayOnePet = (props) => {

    const { petId } = props;
    const[petInfo, setPetInfo] = useState({});
    useEffect(() => {
        console.log("gotPet")
        axios.get(`http://localhost:8000/api/pet/${petId}`)
            .then((singlePet)=>{
                console.log(singlePet.data.pet);
                setPetInfo(singlePet.data.pet)
            })
            .catch((err)=> console.log(err))
            
  
    }, []);


    const deletePet = (id) => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
        .then((response) => {
            console.log("delete done");
            navigate("/");
        })


        .catch((err)=> console.log("error while deleteing", err))

    };

    

    return ( 
        
        <div className="container">
            <h1>Pet Shelter</h1>
            <h3>Details about: {petInfo.name}</h3>
            <Link to="/">back to home</Link>
            <button className="btn btn-danger" onClick={() => deletePet(petInfo._id)}>Adopt {petInfo.name}</button>
            {petInfo? (

            <div className="row justify-content-md-center">
            <div className="border border-primary">
            <p>Pet Type: {petInfo.type}</p>
            <p>Description: {petInfo.description}</p>
            <p>Skills:</p>
            <ul>
            {petInfo.skillOne ? <p>{petInfo.skillOne}</p> : null}
            {petInfo.skillTwo ? <p>{petInfo.skillTwo}</p> : null}
            {petInfo.skillThree ? <p>{petInfo.skillThree}</p> : null}
            </ul>
            </div>
            </div> ): null}




         

            






        </div>
        






     );
}
 
export default DisplayOnePet;
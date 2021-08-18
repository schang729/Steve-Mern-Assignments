import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";

const DisplayPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        console.log("triggered ")
        axios.get("http://localhost:8000/api/pet/")
            .then((allPets) => setPets(allPets.data.allPets))
            .catch((err)=> console.log(err));
            
  
    }, []);

    
    
    
    
    
    
    return ( 
        <>
        <Link to="/pets/new">Add a pet to the shelter</Link>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
        



            {pets.length > 0 && pets.map((pet, index)=>
                <tr key = {index}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <button className="btn btn-info"><Link to={`/pets/${pet._id}`}>Detail</Link></button>
                        <button className="btn btn-dark"><Link to={`/pets/${pet._id}/edit`}>Edit</Link></button>





                    </td>
                
                
                
                
                
                </tr>
            
            
            
            
            
            
            )}
        



            </tbody>
        </table>
        </>
     );
}
 
export default DisplayPets;
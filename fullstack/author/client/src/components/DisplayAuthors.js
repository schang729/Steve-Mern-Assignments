import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "@reach/router";
import Popup from "./Popup";



const DisplayAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const { formSubmitted, setFormSubmitted } = props;
    const [buttonPopup, setButtonPopup] = useState(false)

    useEffect(() => {
        console.log("triggered ")
        axios.get("http://localhost:8000/api/author/sort/sort")
            .then((allAuthors) => setAuthors(allAuthors.data.allAuthors))
            .catch((err)=> console.log(err));
            
  
    }, [formSubmitted]);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then((response) => {
            console.log("delete done")
            setFormSubmitted(!formSubmitted)
        })


        .catch((err)=> console.log("error while deleteing", err))

    }
    const popupSetter = () =>{
        setButtonPopup(true)
    }








    return (
        <>
        
        <Link to="/new">Add an author</Link>
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Author</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
        {authors.length > 0 && authors.map((author, index)=>(
           
            
            <tr key ={index}>
               
 
                <td>{author.name}</td>
                <td>

                    <button className="btn btn-dark"><Link to={`/${author._id}/edit`}>Edit</Link></button>
                    <button className="btn btn-danger" onClick={() =>{ 
                        deleteAuthor(author._id);
                        popupSetter();
                    }}>Delete</button>
                </td>
              
 
            </tr>
         

        ))}
        </tbody>
        </table>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Author Deleted</h2>

        </Popup>






        </>
      );
}
export default DisplayAuthors;
 


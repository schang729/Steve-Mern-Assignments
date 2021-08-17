import React, { useState, useEffect } from "react";
import DisplayAuthors from "../components/DisplayAuthors";


const Main = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    return(
        <div className="container">
            <h1>Favorite authors</h1>
            <DisplayAuthors
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}

            />
        </div>








    )
 






}

export default Main;

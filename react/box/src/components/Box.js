import React, { useState } from 'react';
import BoxCSS from './Box.module.css';

const Box = (props) => {
    const [color, setColor] = useState("");
    const [boxArr, setBoxArr] = useState([]);

    const handleAddBox = (e) =>{
        e.preventDefault();
        const newBoxObj = {
            color: color,
        };
        setBoxArr([newBoxObj, ...boxArr]);
        setColor("");
    }




    return (
        <div>
            <h1>Let's add Color Box</h1>
            <form onSubmit={(e) => handleAddBox(e)}>
                <label>Color: </label>
                <input type="text" value={color} name="color" onChange={ (e) => setColor(e.target.value) } />
                <button>Add</button>





            </form>
            {boxArr.map((item, index) => (
                    
                   
                    <p key={index} className={BoxCSS.boxSize} style={{backgroundColor: item.color }}></p>

            ))}



        </div>




    )



}
export default Box;
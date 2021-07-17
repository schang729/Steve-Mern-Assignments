import React, { useState } from "react";


const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>{stateAge }</p>
            <p>{ hairColor }</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
            Button
            </button>

        </div>
    )
}
export default PersonCard;


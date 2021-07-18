import react, { useState } from 'react';

const Hookform = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstname, lastname, email, password, confirmpassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value ={firstname} onChange={ (e) => setFirstName(e.target.value) } />
                {
                    firstname.length > 0 && firstname.length < 3 ? <p>The first name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname}onChange={ (e) => setLastName(e.target.value) } />
                
                {
                    lastname.length > 0 && lastname.length < 3 ? <p>The last name must be at least 2 characters</p> : null
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length > 0 && email.length < 5 ? <p>The email must be at least 5 characters</p> : null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value ={password}onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length > 0 && password.length < 8 ? <p>The email must be at least 8 characters</p> : null
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                {
                    confirmpassword == password ? null : <p>Password do not match!!</p>
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        {/* <p>First Name:{firstname}</p>
        <p>Last Name:{lastname}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirm Password:{confirmpassword}</p> */}
        </>

        
    );
 




};
export default Hookform;
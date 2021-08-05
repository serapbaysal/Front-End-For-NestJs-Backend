import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer/marginer"
import { useHistory } from "react-router-dom"
import './resetPassword.css'


export function ResetPassword(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const reset = async () => {
        let item = { email, password };
        console.log(item);

        let result = await fetch("http://localhost:5000/auth/resetPassword", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(history.push("/home"))
        result = await result.json();
        console.log("result", result);
    }




    return (
        <div className="wrapper1">
        <img className="upperimg2" src="images/Saly-41.png" alt="" />   
          <div className="form-wrapper">
          
          <form >
          <div className="email">
            <label htmlFor="email"></label> 
            <input 
            placeholder="E-mail"
            type="email" 
            name="email" 
            onChange =  {(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="password">
            <label htmlFor="password"></label> 
            <input 
            placeholder="New Password"
            type="password" 
            name="password" 
            onChange = {(e) => setPassword(e.target.value)}
            required
            minlength="6"
            />
          </div>
          
      
           <button className="buttonsign" onClick={reset}
             value = "Submit">
                 <h5>Confirm</h5> 
           </button>
          </form>
        </div>
         </div>
    )
}
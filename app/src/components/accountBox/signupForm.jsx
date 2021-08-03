import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer/marginer"
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router-dom"


export function SignupForm(props) {
    
    const { switchToSignin } = useContext(AccountContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const signup = async () => {
        let item = { name, surname, email, password };
        console.log(item);

        let result = await fetch("http://localhost:5000/signup", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        console.log("result", result);
        
    }



    
   
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <Input type="text" placeholder="Surame" onChange={(e) => setSurname(e.target.value)}/>
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onClick={signup} >SignUp</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an accoun?{""}
                <BoldLink href="#"  onClick={switchToSignin} >
                    SignIn
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}
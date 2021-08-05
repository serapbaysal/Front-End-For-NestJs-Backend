import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer/marginer"
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router-dom"




export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const login = async () => {
        let item = { email, password };
        console.log(item);

        let result = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(history.push("/home"))
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        console.log("result", result);
    }




    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="/auth/resetPassword">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onClick={login}>Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an accoun?{" "}
                <BoldLink href="#"  onClick={switchToSignup} >
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}
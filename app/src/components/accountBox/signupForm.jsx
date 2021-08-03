import React, {useContext} from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common";
import { Marginer } from "../marginer/marginer"
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Surame" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">SignUp</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an accoun?{" "}
                <BoldLink href="#" onClick={switchToSignin} >
                    SignIn
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}
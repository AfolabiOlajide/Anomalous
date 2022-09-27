import { Button } from "@mui/material";
import React from "react";
import Input from "../ui/input/input";

import "./signUp.scss";

const SignUp = () => {
    return (
        <section className="signup">
            <div className="design"></div>
            <div className="form-place">
                <h1>Create an account</h1>
                <p>Let's get started with creating your account</p>
                <form action="">
                    <Input name="Name" type="text" placeholder="Enter your name"  />
                    <Input name="Email" type="email" placeholder="Enter your email"  />
                    <Input name="Password" type="password" placeholder="Enter your password"  />
                    <Input name="Confirm Password" type="password" placeholder="Confirm your password"  />
                </form>
                <div className="cta">
                    <Button variant="contained">Sign Up</Button>
                    <Button variant="outlined">Signin with Google</Button>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
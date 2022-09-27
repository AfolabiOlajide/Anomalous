
import "./login.scss"

import Input from "../ui/input/input";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <section className="login">
            <div className="form-place">
                <h1 className="heading">Login</h1>
                <p>Welcome back! Please enter your details.</p>
                <form action="">
                    <Input name="Email" type="email" placeholder="Enter Your Email" />
                    <Input name="Password" type="password" placeholder="Enter Your Password" />
                    <div className="form-control">
                        <Input name="" type="checkbox" placeholder="" /> 
                        <p>Remember me for 30days</p>
                    </div>
                    <div className="cta">
                        <Button variant="contained" fullWidth>Sign in</Button>
                        <Button variant="outlined" fullWidth>Sign in with Google</Button>
                    </div>
                </form>
                <div className="options">
                    <Link to=''>forgot password?</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
            <div className="design-place">
                <div className="circle"></div>
                <div className="blur"></div>
            </div>
        </section>
    )
}

export default Login;
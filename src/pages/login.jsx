
import "./login.scss"

import Input from "../ui/input/input";
import { Button } from "@mui/material";

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
            </div>
            <div className="design-place"></div>
        </section>
    )
}

export default Login;
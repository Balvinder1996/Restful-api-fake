import { Link} from 'react-router-dom'
import  { useState } from 'react';
import '../Login-auth/login.scss'
const Login_auth = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const update_username=(event)=>
    {
       setusername(event.target.value);
    }
    const update_pass=(event)=>
    {
       setpassword(event.target.value);
    }
    const login=(event)=>
    {   
        event.preventDefault();
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    return (
        <>
            <div class="container-login">
                <div class="header-login">
                    <div class="header-login-box">
                        <span class="header-text-position">
                            <a href="#">&nbsp;<i class="fa fa-user-plus"></i>&nbsp;&nbsp;Register</a>
                        </span>
                        <a href="#"><i class="fa fa-question"></i>&nbsp;&nbsp;Forgot Password?</a>
                    </div>
                </div>
                <div class="login-box pt-30">
                   <form onSubmit={login}>
                   <div class="login">
                        <h1>Authentication</h1>
                        <input id="username" type="text" placeholder="Username" autoComplete="off" name={username} onChange={update_username} required/>
                        <label for="username" class="login-input-icon">
                            <i class="fa fa-user"></i>
                        </label>
                        <input id="password" type="password" placeholder="Password"  autoComplete="off" onChange={update_pass} required/>
                        <label for="password" class="login-input-icon">
                            <i class="fa fa-lock"></i>
                        </label>
                        <div class="login-remember">
                            <label class="login-checkbox">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <span class="login-remember-text">
                                &nbsp;&nbsp;Remember
                            </span>
                        </div>
                        <button className="mt-10 mb-10" type="submit">Login</button>
                        <div className="mt-10">
                            <p className="theme_color"><Link to="Login" className="theme_color">Register yourself?</Link></p>
                        </div>
                    </div>
                   </form>
                </div>
            </div>
        </>
    )
}
export default Login_auth
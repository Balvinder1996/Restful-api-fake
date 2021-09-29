import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
import '../Login-auth/login.scss'
const Login_auth = (props) => {
    const history = useHistory();
    //registration coding goes here
    const [state, setState] = useState({
        username: "",
        name: "",
        password: "",
        cpass: ""
    })
    const update_register_data = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(state)
    }
    const registration = (event) => {
        event.preventDefault()
        if (state.password == state.cpass) {
            const { username, cpass, password, name } = state
            sessionStorage.setItem("name", name)
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("pass", password)
            toast.success("registration successful !")
            setLogin_state(true)
        }
        else {
            toast.error("password does not match with confirm password")
        }
    }
    // login coding goes here
    const [auth, setauth] = useState({
        login_username: "",
        login_password: ""
    })
    const login_state_update = e => {
        const { name, value } = e.target
        console.log(e.target.value)
        setauth(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const login = (event,props) => {
        event.preventDefault();
        const username=sessionStorage.getItem("username")
        const pass=sessionStorage.getItem("pass")
        if(auth.login_username==username && auth.login_password==pass)
        {
            toast("login done")
           setTimeout(() => {
            history.push("/");
           }, 1000);
        }
        else
        {
            toast.error("invalid credentials")
        }
    }
    const [login_state, setLogin_state] = useState(true)
    return (
        <>
            <ToastContainer />
            <div class="container-login">
                <div class="header-login">
                    <div class="header-login-box">
                        <span class="header-text-position">
                            <a href="#">&nbsp;<i class="fa fa-user-plus"></i>&nbsp;&nbsp;Register</a>
                        </span>
                        <a href="#"><i class="fa fa-question"></i>&nbsp;&nbsp;Forgot Password?</a>
                    </div>
                </div>
                {
                    login_state ?
                        <div class="login-box pt-30">
                            <form onSubmit={login}>
                                <div class="login">
                                    <h1>LogIn</h1>
                                    <input id="username"
                                        type="text"
                                        placeholder="Username"
                                        autoComplete="off"
                                        name="login_username"
                                        onChange={login_state_update}
                                        required />
                                    <label for="username" class="login-input-icon">
                                        <i class="fa fa-user"></i>
                                    </label>
                                    <input id="password"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        name="login_password"
                                        onChange={login_state_update}
                                        required />
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
                                        <p className="theme_color pointer-cursor " onClick={() => { setLogin_state(false) }} >Register Yourself?</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        :
                        <div class="login-box pt-30">
                            <form onSubmit={registration} >
                                <div class="login">
                                    <h1>Registration</h1>
                                    <input id="username"
                                        type="text"
                                        placeholder="Username"
                                        autoComplete="off"
                                        name="username"
                                        onChange={update_register_data}
                                        required />
                                    <label for="username" class="login-input-icon">
                                        <i class="fa fa-user"></i>
                                    </label>
                                    <input id="name"
                                        type="text"
                                        placeholder="Full Name"
                                        autoComplete="off"
                                        name="name"
                                        onChange={update_register_data}
                                        required />
                                    <label for="username" class="login-input-icon">
                                        <i class="fa fa-user"></i>
                                    </label>
                                    <input id="password"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        name="password"
                                        onChange={update_register_data}
                                        required />
                                    <label for="password" class="login-input-icon">
                                        <i class="fa fa-lock"></i>
                                    </label>
                                    <input id="cpassword"
                                        type="password"
                                        placeholder="confirm-Password"
                                        autoComplete="off"
                                        name="cpass"
                                        onChange={update_register_data}
                                        required />
                                    <label for="cpassword" class="login-input-icon">
                                        <i class="fa fa-lock"></i>
                                    </label>
                                    <button className="mt-10 mb-10" type="submit">Register</button>
                                    <div className="mt-10">
                                        <p className="theme_color pointer-cursor "
                                            onClick={() => { setLogin_state(true) }} >Have an account?</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                }
            </div>
        </>
    )
}
export default Login_auth
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
import '../Login-auth/login.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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
            setLogin_state(true);
            document.getElementById("form").reset()
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
    const login = (event) => {
        event.preventDefault();
        const username = sessionStorage.getItem("username")
        const pass = sessionStorage.getItem("pass")
        if (auth.login_username == username && auth.login_password == pass) {
            toast.success("successfully login");
            let token = generate_token(32)
            sessionStorage.setItem("token", token)
            setTimeout((props) => {
                history.push({
                    pathname: '/',
                    state: true,
                });
            }, 1000);
        }
        else {
            toast.error("invalid credentials")
        }
    }
    const [login_state, setLogin_state] = useState(true)
    const login_switch = () => {
        setLogin_state(true);
        document.getElementById("form").reset()
    }
    const generate_token = (length) => {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        var b = [];
        for (var i = 0; i < length; i++) {
            var j = (Math.random() * (a.length - 1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join("");
    }
    // formik coding starts here
    const DisplayingErrorMessagesSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      }); 
    // formik coding ends here
    return (
        <>
            <ToastContainer />
            <div class="container-login">
                {
                    login_state ?
                        <div class="login-box pt-30">
                             <Formik
       initialValues={{
         username: '',
         email: '',
       }}
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form  onSubmit={login} id="form">
           <Field name="username"  placeholder="Username"
                                        autoComplete="off"
                                        name="login_username"
                                        onChange={login_state_update}/>
           {/* If this field has been touched, and it contains an error, display it
            */}
           {touched.username && errors.username && <div>{errors.username}</div>}
           <Field name="email" />
           {/* If this field has been touched, and it contains an error, display
           it */}
           {touched.email && errors.email && <div>{errors.email}</div>}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
                            <form onSubmit={login} id="form">
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
                                        <p className="theme_color pointer-cursor "
                                            onClick={() => {
                                                setLogin_state(false);
                                                document.getElementById("form").reset()
                                            }} >
                                            Register Yourself?</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        :
                        <div class="login-box pt-30">
                            <form onSubmit={registration} id="form" >
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
                                        <p className="theme_color pointer-cursor " onClick={login_switch}>Have an account?</p>
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
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";
const Login = () => {
    const {googleLogin, logIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(err => console.error(err))
    }

    const {register, formState: { errors }, handleSubmit} = useForm();
    const [logInErr, setLogInErr] = useState('');
    const [loginEmail, setLoginEmail] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(loginEmail);
    const from = location.state?.from?.pathname || '/';
    if(token){
      navigate(from, {replace: true});
    }
    
    

    const handleLogin = data =>{
      setLogInErr('');
        logIn(data.email, data.password)
        .then(res => {
          const user = res.user;
          console.log(user);
          setLoginEmail(data.email);
        })
        .catch(err => {
          setLogInErr(err.message)
        })
    }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

            <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input {...register("email", {
              require: "Email Address is required"
            })}
             type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
             {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input {...register("password", {
              require: "Password is required"
            })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            </div>

          <input className="btn border-none w-full bg-orange-400 max-w-xs my-4" type="submit" value='Login'/>
          <div>
            {logInErr && <p className="text-sm text-red-500">{logInErr}</p>}
          </div>
        </form>
        <p>New to here? <Link className="text-red-600" to='/signup'>Signup</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;

import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Login = () => {
    const {googleLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(err => console.error(err))
    }

    const {register, handleSubmit} = useForm();
    const handleLogin = data =>{
        console.log(data);
    }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

            <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input {...register("Email")} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input {...register("Password")} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            </div>

          <input className="btn border-none w-full bg-orange-400 max-w-xs my-4" type="submit" value='Login'/>
        </form>
        <p>New to here? <Link className="text-red-500" to='/signup'>Signup</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;

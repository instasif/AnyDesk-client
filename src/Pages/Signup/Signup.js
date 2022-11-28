import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();
    if(token){
      navigate('/');
    }
    const handleSignup = data =>{
      console.log(data);
      setSignupError('');
      createUser(data.email, data.password)
      .then(res => {
        const user = res.user;
        console.log(user);
        toast.success('user created successfully!!')
        const userInfo ={
          displayName: data.name
        }
        updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email);
        })
        .catch(err => console.error(err))
      })
      .catch(err => {
        console.error(err)
        setSignupError(err.message);
      })
    };

    const saveUser = (name, email) =>{
      const user = {name, email};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
          setCreateUserEmail(email);
        
      })
    }

    // const getUserToken = email =>{
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //   .then(res => res.json())
    //   .then(data =>{
    //       if(data.accessToken){
    //         localStorage.setItem('accessToken', data.accessToken)
    //       }
    //   })
    // }

    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>

            <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Full Name</span></label>
            <input {...register("name", {
              require: "Name Address is required"
            })}
             type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
             {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>

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
          {signupError && <p className='text-red-600'>{signupError}</p>}
        </form>
        <p>Already have an account? <Link className="text-red-500" to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Signup;
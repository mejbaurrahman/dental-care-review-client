import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle'

export default function Registration() {
    useTitle('Registration');
    const {registration, updateUser, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister =(e)=>{
         e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const photoURL = form.photoURL.value;
          const email = form.email.value;
          const password = form.password.value;
          registration(name, photoURL, email, password)
          .then((userCredential)=>{
            const result = userCredential.user;
        })
        .then(user=>{
            updateUser(name, photoURL);
            alert("successfully Created");
            navigate('/login', {replace:true});
            logout();
            
        })
        .catch((error)=>{
            console.log(error.message);
        })
;
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <h1 className='text-center my-3 fw-bold'>Registration</h1>
      <form onSubmit={handleRegister} action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"   name='name' placeholder='name' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="text"   name='photoURL' placeholder='Photo Url' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="email" name='email' placeholder='email' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="password" name='password' placeholder='password' /><br/><br/>
        <button className='btn btn-primary' type="submit">Register</button>
      </form>
      <br />
      <h5>Already User? Please <Link to='/login'>Login</Link> </h5>
    </div>
    </div>
  )
}

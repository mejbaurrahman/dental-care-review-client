import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle'

export default function Login() {
    useTitle('Login');
    const {user, login, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const handleLogin =(e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
  
      login(email, password)
      .then(userCredential=>{
        const result = userCredential.user;
        navigate(from, { replace: true });
        console.log(result);
        
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <h1 className='text-center my-3 fw-bold'>Login</h1>
      <form onSubmit={handleLogin} action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="email"  name='email' placeholder='email' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="password" name='password' placeholder='password' /><br/><br/>
        <button className='btn btn-primary' type="submit">Log in</button>
      </form>
      <br />
      <h5>New User? Please <Link to='/register'>Register</Link> </h5>
    </div>
    </div>
  )
}

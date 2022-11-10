import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Spinner, Toast } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Login() {
    useTitle('Login');
    const {user, login,setShow, setUser, googleLogin} = useContext(AuthContext);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    

    const from = location.state?.from?.pathname || '/';
    
    const handleLogin =(e)=>{

      e.preventDefault();
      setLoadingLogin(true);
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      
      login(email, password)
      .then(userCredential=>{
        const user = userCredential.user;
        
        const currentUser = {email:user.email};
        fetch(`https://dental-care-server.vercel.app/jwt`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          localStorage.setItem('token', data.token);
          setShow(true);
          setLoadingLogin(false);
          navigate(from, { replace: true });
        }) 
        
      })
      .catch((error)=>{
        console.log(error.message);
      })
      
    }

    const handleGoogleLogin =(e)=>{
      e.preventDefault();
      googleLogin()
      .then((result) => {
        
        const user = result.user;
        const currentUser = {email:user.email};
        fetch(`https://dental-care-server.vercel.app/jwt`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          localStorage.setItem('token', data.token);
          setShow(true);
          setLoadingLogin(false);
          navigate(from, { replace: true });
        })


      }).catch((error) => {
        console.log(error.message);
      });
    }
    // const handleLogin =(e)=>{

    //   e.preventDefault();
    //   setLoadingLogin(true);
    //   const form = e.target;
    //   const email = form.email.value;
    //   const password = form.password.value;
      
    //   login(email, password)
    //   .then(userCredential=>{
    //     const result = userCredential.user;
    //     setShow(true);
    //     setLoadingLogin(false);
        

    //     navigate(from, { replace: true });
    //     console.log(result);
        
        
    //   })
    //   .catch((error)=>{
    //     console.log(error.message);
    //   })
      
    // }
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
    {
      loadingLogin&& <Spinner className='my-5' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    }
      <h1 className='text-center my-3 fw-bold'>Login</h1>
      <form onSubmit={handleLogin} action="">
        <input className='px-3 w-100 py-2 border border-1 rounded' type="email"  name='email' placeholder='email' /><br/><br/>
        <input className='px-3 w-100 py-2 border border-1 rounded' type="password" name='password' placeholder='password' /><br/><br/>
        <button className='btn btn-primary' type="submit">Log in</button>
      </form>
      <br />
      <hr className='text-primary'/>
      <button className='btn btn-outline-primary my-2' onClick={handleGoogleLogin}>Google Sign in <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
      <h5>New User? Please <Link to='/register'>Register</Link> </h5>
    </div>
    
    </div>
  )
}

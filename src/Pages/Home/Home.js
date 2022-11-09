import React, { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import useTitle from '../../Components/hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

export default function Home() {
  const {show, setShow} = useContext(AuthContext);
  useTitle('MDC')
  return (
    <div>
       
    </div>
  )
}

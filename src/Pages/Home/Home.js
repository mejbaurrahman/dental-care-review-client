import React, { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

export default function Home() {
  const {show, setShow} = useContext(AuthContext);
  return (
    <div>
       Home
    </div>
  )
}

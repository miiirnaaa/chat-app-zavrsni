import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import logout from "../../images/logout.png";


const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Mirnin Chat</span>
      <div className="user">
        <img src={currentUser.img} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}><img src={logout} alt="" width={100} /></button>
      </div>
    </div>
  )
}

export default Navbar
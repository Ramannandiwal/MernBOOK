import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout}=useContext(AuthContext)
    const location= useLocation();
    const navigate = useNavigate();
    const from =location.state?.from?.pathname || "/";
    const handlelogout=()=>{
        console.log("ehllow rold ")
      logout().then(()=>{
        alert("sign out succesfully")
        navigate(from,{replace:true})
      })
      .catch((error)=>{

      })
    }
  return (
    <div className=' h-screen bg-teal-200 flex items-center justify-center'>
       <button onClick={handlelogout} className=' bg-red-700  px-8 py-2 text-white rounded'>Logout</button>
    </div>
  );
}

export default Logout;

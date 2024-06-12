import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

const handlelogOut =() =>{
    auth.logout();
    navigate('/');
}

  return (
    <>
    <div>Welcome {auth.user}</div>
    <button onClick={()=> {handlelogOut()}}>LogOut</button>
    </>
  )
}

export default Profile
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import logo192 from "../Logo/logo192.png"

export default  function Navbar ()  {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        <img src={logo192} alt="logo-img"/>
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};



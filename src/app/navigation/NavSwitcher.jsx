import React, { useContext } from 'react';
import HomeNav from './HomeNav';
import IndexNav from './IndexNav';
import { MyAuthContext } from '../../context/AuthContext';


// const token = null;

const NavSwitcher = () => {
  const context = useContext(MyAuthContext);
  const { authStatus } = context;
  const token = localStorage.getItem("tbAuthtkn");
  return (
    <div>
      { localStorage.setItem("tbAuthtkn", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMDIxNDY5MjQiLCJpc0FkbWluIjpmYWxzZSwicGhvbmVOdW1iZXIiOjc4MTI5NTQwNiwiaWF0IjoxNTg4MTkyMjQyLCJleHAiOjE1ODg3OTcwNDJ9.NTqzntf-QEGNqbVbno58Sm46RzZynwIHug5FaWFql7M") }
      { token === null ? <IndexNav /> : <HomeNav /> }
    </div>
  );
};

export default NavSwitcher;

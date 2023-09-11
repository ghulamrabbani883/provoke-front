import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";

const Navbar = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate()
  const logOut = async ()=>{
    const {data} = await axios.get( BASE_URL + '/user/logout', { withCredentials: true })
    if(data.success){
      alert(data.message)
      setIsLogin(false)
      navigate('/login')
    }else{
      navigate('/plans')
    }
  }
  
  return (
    <nav className="w-full h-16 px-12 flex justify-between items-center bg-blue-600">
      <Link to="/">
        <h1 className="text-2xl text-white">Provoke</h1>
      </Link>
      {!isLogin ? (
        <div className="flex gap-4">
          <Link to="/register">
            <button className="border border-white text-gray-800 bg-white rounded-md w-32 h-8 text-center hover:bg-blue-600 hover:text-white transition-all duration-150">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="border rounded-md w-32 h-8 text-center bg-blue-600 text-white hover:bg-white hover:text-gray-800 hover:border-blue-600 transition-all duration-150">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/plans">
            <button className="border border-white text-gray-800 bg-white rounded-md w-32 h-8 text-center hover:bg-blue-600 hover:text-white transition-all duration-150">
              Plans
            </button>
          </Link>
          <button className="border rounded-md w-32 h-8 text-center bg-blue-600 text-white hover:bg-white hover:text-gray-800 hover:border-blue-600 transition-all duration-150" onClick={logOut}>
            LogOut
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

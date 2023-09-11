import React from "react";
import { Link } from "react-router-dom";

const Home = ({isLogin}) => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
      {!isLogin ? (
        <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
          <div className="">
            <h2 className="text-4xl text-gray-800">Welcome to Provoke Proof</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Link to="/register">
              <button className="border border-blue-600 text-gray-800 bg-white rounded-lg w-40 h-10 text-center hover:bg-blue-600 hover:text-white transition-all duration-150">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="border rounded-lg w-40 h-10 text-center bg-blue-600 text-white hover:bg-white hover:text-gray-800 hover:border-blue-600 transition-all duration-150">
                Login
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
          <div className="">
            <h2 className="text-4xl text-gray-800">Welcome to Provoke Proof</h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Link to="/plans">
              <button className="border bg-blue-600 rounded-lg w-40 h-10 text-center text-white hover:bg-white hover:text-blue-600 transition-all duration-150">
                See Our plans
              </button>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

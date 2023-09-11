import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      BASE_URL + "/user/register",
      registerData
    );
    if (data.success) {
      alert(data.message);
      setRegisterData({ name: "", email: "", password: "" });
      navigate("/login");
    } else {
      alert(data.message);
      setRegisterData({ name: "", email: "", password: "" });
    }
  };
  return (
    <div className="w-full bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="w-96 min-h-fit p-8 rounded-xl bg-white">
        <div className="mb-5">
          <h2 className="text-center text-gray-800 text-2xl">Create Account</h2>
        </div>
        <div className="">
          <form
            className="flex flex-col gap-4"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label className="text-gray-800" htmlFor="name">
                Name
              </label>
              <input
                className="w-full h-10 p-2 text-md text-gray-800 border border-gray-800 rounded-md outline-none font-medium text-md"
                type="text"
                name="name"
                onChange={handleChange}
                value={registerData.name}
                placeholder="Enter your full Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                className="w-full h-10 p-2 text-md text-gray-800 border border-gray-800 rounded-md outline-none font-medium text-md"
                type="email"
                name="email"
                onChange={handleChange}
                value={registerData.email}
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-800" htmlFor="password">
                Name
              </label>
              <input
                className="w-full h-10 p-2 text-md text-gray-800 border border-gray-800 rounded-md outline-none font-medium text-md"
                type="password"
                name="password"
                onChange={handleChange}
                value={registerData.password}
                placeholder="Enter password"
              />
            </div>
            <div className="flex gap-3 text-sm font-medium">
              <input className="indeterminate:bg-gray-200" type="checkbox" />
              Remember Me
            </div>
            <div className="flex flex-col gap-1">
              <input
                className="w-full h-10 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-500 transition-all duration-150"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <h3 className="text-center mt-5 font-medium">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;

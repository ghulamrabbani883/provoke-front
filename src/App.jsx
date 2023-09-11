import React, { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Error404 from "./components/Error404.jsx";
import Navbar from "./components/Navbar.jsx";
import Plans from "./components/Plans.jsx";
import Payment from "./components/Payment.jsx";
import Success from "./components/Success.jsx";
import Cancel from "./components/Cancel.jsx";
import SecureRoute from "./utils/secureRoute.jsx";
import Porfile from "./components/Porfile.jsx";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home isLogin={isLogin} />} />
            <Route path="/" element={<SecureRoute isLogin={isLogin} setIsLogin={setIsLogin} />}>
              <Route path="/plans" element={<Plans />} />
              <Route path="/success" element={<Success />} />
              <Route path="/me" element={<Porfile />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/payment/:planId" element={<Payment />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
    </>
  );
};

export default App;

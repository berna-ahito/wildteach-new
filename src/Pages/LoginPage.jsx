import React from "react";
import LandingHeader from "../Components/Shared/LandingHeader";
import LoginForm from "../Components/Login/LoginForm";
import "../Pages/Styles/Login.css";

const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <>
      <div className="bg-image"></div>
      <LandingHeader />
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default LoginPage;

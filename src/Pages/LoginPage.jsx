import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import LandingHeader from "../Components/Shared/LandingHeader";
import "../Pages/Styles/Login.css";

const LoginPage = ({ setIsLoggedIn }) => (
  <>
    <div className="bg-image"></div>
    <LandingHeader />
    <LoginForm setIsLoggedIn={setIsLoggedIn} />
  </>
);

export default LoginPage;
import React from "react";
import RegisterForm from "../Components/Register/RegisterForm";
import LandingHeader from "../Components/Shared/LandingHeader";
import "../Pages/Styles/Login.css";

const RegisterPage = () => (
  <>
    <div className="bg-image"></div>
    <LandingHeader />
    <RegisterForm />
  </>
);

export default RegisterPage;

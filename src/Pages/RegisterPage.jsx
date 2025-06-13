import React from 'react'
import './Styles/Login.css'; 

const RegisterPage = () => {
  return (
    <>
         <div className="bg-image"></div>
        <div className="login-container">
        <h1>Create an Account</h1>
        <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
        </form>
        <a href="/login">Already have an account? Login</a>
        </div>
    </>
  )
}

export default RegisterPage

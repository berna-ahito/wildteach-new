import React from "react";
import MainImage from "../../assets/images/Main.jpg";

export default function HomeSection({ onLogin, onRegister }) {
  return (
    <div className="content-box">
      <div className="left-side">
        <img src={MainImage} alt="Main visual" className="main-image" />
      </div>
      <div className="right-side">
        <h2>Empower Students</h2>
        <div className="tags">
          <span>Learn</span>
          <span>Teach</span>
          <span>Succeed</span>
          <span>Together</span>
        </div>
        <p>
          Connect students who need academic support with peer tutors on campus.
          Simplify booking, scheduling, and payments, making learning more
          accessible and tutoring more rewarding.
        </p>
        <div className="buttons">
          <button className="login-btn" onClick={onLogin}>Login</button>
          <button className="register-btn" onClick={onRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

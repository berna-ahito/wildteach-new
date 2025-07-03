import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/Styles/UnauthorizedPage.css';

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-wrapper">
      <div className="unauthorized-card">
        <h2 className="unauthorized-title">Access Denied</h2>
        <p className="unauthorized-message">Please register or login to continue.</p>
        <button className="unauthorized-btn" onClick={() => navigate('/')}>
          Return to Landing Page
        </button>
      </div>
    </div>
  );
}

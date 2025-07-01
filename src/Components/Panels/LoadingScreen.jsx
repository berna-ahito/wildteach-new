import React, { useEffect, useState } from "react";
import '../../Pages/Styles/LoadingScreen.css'
export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="loading-dialog-backdrop">
      <div className="loading-dialog">
        <div className="logo-badge spin">
          <div className="logo-inner">W</div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

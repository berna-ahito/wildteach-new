import React, { useEffect } from "react";
import Sidebar from "../Shared/Sidebar";
import Header from "../Shared/Header";
import "../../Pages/Styles/shared/CommonGlobals.css";
import "../../Pages/Styles/shared/CommonComponents.css";
import "../../Pages/Styles/TutorPage/TutorGlobals.css";
import "../../Pages/Styles/TuteePage/TuteeGlobals.css";

export default function DashboardLayout({
  title,
  children,
  role = "tutor",
  menuItems,
}) {
  useEffect(() => {
    document.body.classList.add("red-theme");
    return () => {
      document.body.classList.remove("red-theme");
    };
  }, []);

  const cssClass =
    role === "tutee"
      ? "tutee-dashboard bright-theme"
      : "tutor-dashboard bright-theme";
  const contentClass = role === "tutee" ? "tutee-content" : "content";

  return (
    <div className={cssClass}>
      <Sidebar role={role} menuItems={menuItems} />
      <div className={contentClass}>
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}

import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import getAdminMenu from "./Routes/menuAdmin";

export default function Settings() {
  const navigate = useNavigate();
  const menuItems = getAdminMenu(navigate);

  return (
    <>
      <Header title="Settings" />
      <Sidebar menuItems={menuItems} />
      <div style={{ paddingTop: "80px", paddingLeft: "16px" }}>
        <h1>Settings Page</h1>
      
      </div>
    </>
  );
}
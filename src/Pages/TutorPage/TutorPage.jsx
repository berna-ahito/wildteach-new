import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function TutorPage() {
    const navigate = useNavigate();
    
    const menuItems = [
        { text: "Dashboard", onClick: () => navigate('/tutorDashboard') },
        { text: "Manage Students", onClick: () => navigate('/manageStudents') },
        { text: "Profile", onClick: () => navigate('/profile') },
        { text: "Logout", onClick: () => {
            localStorage.clear();
            navigate('/login');
        }
        },
    ];
    
    return (
        <div>
        <Sidebar menuItems={menuItems} buttonLabel="Menu" />
        <h1>Welcome to the Tutor Dashboard!</h1>
        </div>
    );
}
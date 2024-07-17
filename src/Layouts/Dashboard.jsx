import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div className="relative min-h-screen md:flex">
            <Sidebar />
            {/* dynamic content */}
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
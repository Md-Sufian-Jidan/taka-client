import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
// import PrivateRoute from "../Contexts/PrivateRoute";
import Profile from "../Components/Shared/Profile";
import Statistic from "../Components/Roles/Admin/Statistic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'statistic',
                element: <Statistic />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);

export default router;
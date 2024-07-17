import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import PrivateRoute from "../Contexts/PrivateRoute";
import Profile from "../Components/Shared/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <Profile />
            }
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
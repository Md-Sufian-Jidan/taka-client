import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import PrivateRoute from "../Contexts/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/route',
                element: <div>route</div>
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
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    const from = location;

    if (isLoading) {
        <span className="loading loading-bars loading-lg"></span>
    }

    if (user) return children;
    return <Navigate to='/login' state={{ from }} replace='true' />
}

PrivateRoute.propTypes = {
    children: PropTypes.element,
};
export default PrivateRoute;
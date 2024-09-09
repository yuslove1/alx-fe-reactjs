import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const isAuthenticated = true;  // dummy authentication
    return (
        isAuthenticated ? <Outlet/> : <Navigate to="/" replace/> //if authenticated render passed else goto home
    );
}

export default ProtectedRoute;
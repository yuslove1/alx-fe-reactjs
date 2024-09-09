import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const useAuth = true;  // dummy authentication
    return (
        useAuth ? <Outlet/> : <Navigate to="/" replace/> //if authenticated render passed else goto home
    );
}

export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
    const token = localStorage.getItem("token")
    return token ? <Outlet /> : <Navigate to="/login" replace />;


}
export default PublicRoute 
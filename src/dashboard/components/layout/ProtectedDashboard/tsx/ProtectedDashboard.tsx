import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "../../../../../store/hook";

export const ProtectedDashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard/login"} replace />
  );
};

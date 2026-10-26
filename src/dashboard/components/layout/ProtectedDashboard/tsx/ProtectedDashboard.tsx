import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "../../../../../store/hook";
import { getMe } from "../../../../api/auth/api.me";
import { setUser, clearUser } from "../../../../redux/auth/authSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const ProtectedDashboard = () => {
  const dispatch = useDispatch();
  const meQuery = useQuery({
    queryKey: ["auth", "me"],
    queryFn: getMe,
    retry: false,
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (meQuery.isSuccess) {
      dispatch(setUser(meQuery.data.data));
    }

    if (meQuery.isError) {
      dispatch(clearUser());
    }
  }, [meQuery.isSuccess, meQuery.isError, meQuery.data, dispatch]);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard/login"} replace />
  );
};

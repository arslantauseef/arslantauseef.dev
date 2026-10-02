import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedDashboard = () => {
    const isTrue:boolean = false
  return isTrue ? <Outlet/> : <Navigate to={"/dashboard/login"} replace />
}

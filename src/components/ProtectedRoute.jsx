import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

/* Beskytter de ruter, der pakkes uden om (backoffice).
   Er brugeren ikke logget ind, sendes de videre til /login.
   Ellers vises den beskyttede rute via <Outlet />. */
const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RutaPorRol = ({ children, permitido }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const roles = useSelector((state) => state.auth.user?.roles || []);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!roles.some((r) => permitido.includes(r))) return <Navigate to="/no-autorizado" replace />;

  return children;
};

export default RutaPorRol;

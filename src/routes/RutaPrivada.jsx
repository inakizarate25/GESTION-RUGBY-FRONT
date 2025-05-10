import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RutaPrivada = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default RutaPrivada;

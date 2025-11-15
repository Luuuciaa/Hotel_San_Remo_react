
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Si no está autenticado, redirige a login
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, muestra el contenido
    return children;
}

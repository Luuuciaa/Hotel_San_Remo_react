
import { createContext, useContext, useState, useCallback, useMemo } from "react";

const AUTH_URL = 'https://hotelsanremoapi-production.up.railway.app/api/token/';
// URL de la API de autenticación

// Creamos el contexto de autenticación
export const AuthContext = createContext(null);

// Proveedor del contexto de autenticación
export function AuthProvider({ children }) {
    // Estado que guarda el JWT token
    const [token, setToken] = useState(localStorage.getItem('auth_token') || null);

    // Función para iniciar sesión (login)
    const login = useCallback(async ({ username, password }) => {
        try {
            // Petición POST al endpoint de autenticación
            const res = await fetch(AUTH_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })// enviamos usuario y contraseña
            });

            // Si la respuesta no es OK, devolvemos un error
            if (!res.ok) {
                const text = await res.text().catch(() => '');
                return { ok: false, error: text || `Auth failed ${res.status}` };
            }

            // Parseamos el JSON de la respuesta
            const body = await res.json().catch(() => null);
            const jwt = body?.access;

            if (jwt) {
                // Guardamos el token en localStorage y en el estado
                localStorage.setItem('auth_token', jwt);
                setToken(jwt);
                return { ok: true };
            }
            // Si no vino token, devolvemos error

            return { ok: false, error: 'No token in response' };
        } catch (e) {
            return { ok: false, error: e?.message || String(e) };
        }
    }, []);

    // Función para cerrar sesión (logout)
    const logout = useCallback(() => {
        localStorage.removeItem('auth_token');// eliminamos token de localStorage
        setToken(null);// eliminamos token del estado
    }, []);

    // Memoizamos el valor del contexto para optimizar renderizados
    const value = useMemo(() => ({
        token, // JWT (o null)
        isAuthenticated: !!token, // Booleano: ¿hay token autenticado?
        login, // Función para iniciar sesión
        logout // Función para cerrar sesión
    }), [token, login, logout]);
    // Proveedor del contexto: cualquier componente hijo podrá consumirlo
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para consumir el contexto de autenticación
export function useAuth() {
    const ctx = useContext(AuthContext);// obtenemos el contexto
    if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
    return ctx;// devolvemos token, login, logout e isAuthenticated
}



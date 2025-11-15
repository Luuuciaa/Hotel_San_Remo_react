import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";// Librería para mostrar alertas bonitas

//Función para el cierre de sesión
export function ButtonLogout() {
    const navigate = useNavigate();//Inicializamos useNavigate para poder redirigir al usuario a otra ruta después del logout

 // Función que se ejecuta al hacer clic en el botón de logout
    const handleLogout = () => {
          // Borra los tokens de autenticación guardados en el navegador,
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        Swal.fire({
            title: "Sesión cerrada correctamente",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
        });
        // Redirige al usuario a la página de login después de borrar los tokens
        navigate("/login");
    };

    
    return (
        <button
            onClick={handleLogout}
            type="button"
        >
            Cerrar Sesión
        </button>



    );
}

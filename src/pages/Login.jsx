import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const res = await login(form);

                if (res.ok) {
                    // Mostrar alerta de éxito
                    Swal.fire({
                        title: "Inicio de sesión exitoso",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                    const from = "/";
                    navigate(from, { replace: true });
                } else {
                    // Mostrar detalle exacto de Django si lo hay
                    setError(res.error || "Error de autenticación");
                }
            } catch (err) {
                setError(err.message || "Error al conectar con el servidor");
            }
        })();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    return (
        <section className="pb-40 pt-20 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[400px]">
                <h1 className="text-2xl font-bold mb-6 text-center font-[Montserrat]">
                    Iniciar sesión
                </h1>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                <form
                    onSubmit={handleSubmit}
                    className="bg-[#fcf8ef] p-6 rounded-2xl border border-white/10 shadow-md flex flex-col gap-4"
                >
                    {/* Usuario */}
                    <div className="flex flex-col">
                        <label htmlFor="username" className="font-bold mb-2 font-[Arial]">
                            Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Nombre de usuario"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-md text-[16px] focus:outline-none focus:shadow-md bg-white font-[Montserrat]"
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-bold mb-2 font-[Arial]">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-md text-[16px] focus:outline-none focus:shadow-md bg-white font-[Montserrat]"
                        />
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-[#d8b25e] text-[#3f2c0e] font-bold rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 font-[Montserrat] whitespace-nowrap cursor-pointer sm:px-2 sm:py-2 sm:text-base md:px-2 md:py-2 md:text-lg lg:px-4 lg:py-2 lg:text-[17px]"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

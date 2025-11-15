
import { useState } from "react";
import { MenuLink } from "./Children";
import { HashLink } from "react-router-hash-link";//Funciona igual que <Link> de React Router. Interpreta los # (hash) y te lleva hasta el elemento con ese id dentro de la página.
import { useAuth } from "../contexts/AuthContext";


//Componente Menú de navegación
export function Menu() {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();


    // Función que cambia el estado de isOpen para abrir/cerrar el menú móvil
    function handleClick() {
        setIsOpen(!isOpen);
    }
    // Para mostrar/ocultar el menú móvil con transición
    const classIsOpen = isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0";


    return (
        <header>
            <nav className="bg-[#fcf8ef] flex items-center p-4 shadow-md">
                {/* Logo */}
                <img
                    src="/img/logo.png"
                    alt="San Remo Logo"
                    className="w-[110px] h-[106px]"
                    id="logo"
                />

                {/* Links de escritorio */}
                <ul className="hidden md:flex ml-auto space-x-6">

                    <li>
                        <MenuLink to="/">El Hotel</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/habitaciones">Habitaciones</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/promociones">Promociones</MenuLink>
                    </li>
                    <li>
                        <MenuLink><HashLink smooth to="/#servicios">Servicios</HashLink></MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/ubicacion">Ubicación</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/contacto">Contacto</MenuLink>
                    </li>
                    {/* Solo mostrar Admin si está autenticado */}
                    {isAuthenticated && (
                        <li>
                            <MenuLink to="/admin/habitaciones">Admin</MenuLink>
                        </li>
                    )}

                    <li>
                        {/*Mostrar logout  si está autenticado y sino login */}
                        {
                            isAuthenticated ? (
                                <MenuLink><button onClick={logout}>Logout</button></MenuLink>
                            ) :
                                (
                                    <MenuLink to="/login">Login</MenuLink>
                                )
                        }

                    </li>
                </ul>


                {/* Botón menú de hamburguesa */}
                <button
                    onClick={handleClick}
                    aria-expanded={isOpen}
                    aria-label="Abrir menú"
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#3f2c0e] hover:text-[#fcf8ef]"
                >
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Menú móvil */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${classIsOpen}`}
                >
                    <nav>
                        <ul className="flex flex-col gap-5 mt-3 mb-2">
                            <li>
                                <MenuLink to="/">El Hotel</MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/habitaciones">Habitaciones</MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/promociones">Promociones</MenuLink>
                            </li>
                            <li>
                                <MenuLink><HashLink smooth to="/#servicios">Servicios</HashLink></MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/ubicacion">Ubicación</MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/contacto">Contacto</MenuLink>
                            </li>
                            {/* Solo mostrar Admin si está autenticado */}
                            {isAuthenticated && (
                                <li>
                                    <MenuLink to="/admin/habitaciones">Admin</MenuLink>
                                </li>
                            )}
                            <li>
                                {/*Mostrar logout  si está autenticado y sino login */}
                                {
                                    isAuthenticated ? (
                                        <MenuLink><button onClick={logout}>Logout</button></MenuLink>
                                    ) :
                                        (
                                            <MenuLink to="/login">Login</MenuLink>
                                        )
                                }

                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
}
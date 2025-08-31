
import { useState } from "react";
import { MenuLink } from "./Children";

//Componente Menú de navegación
export function Menu() {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

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
                    <MenuLink to="/">El Hotel</MenuLink>
                    <MenuLink to="/habitaciones">Habitaciones</MenuLink>
                    <MenuLink to="/promociones">Promociones</MenuLink>
                    <MenuLink to="/#servicios">Servicios</MenuLink>
                    <MenuLink to="/ubicacion">Ubicación</MenuLink>
                    <MenuLink to="/contacto">Contacto</MenuLink>
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
                            <MenuLink to="/">El Hotel</MenuLink>
                            <MenuLink to="/habitaciones">Habitaciones</MenuLink>
                            <MenuLink to="/promociones">Promociones</MenuLink>
                            <MenuLink to="/#servicios">Servicios</MenuLink>
                            <MenuLink to="/ubicacion">Ubicación</MenuLink>
                            <MenuLink to="/contacto">Contacto</MenuLink>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
}

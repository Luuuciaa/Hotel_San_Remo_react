

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { habitaciones } from "../data/habitaciones";
import { ButtonReservar } from "../components/ButtonReservar";

export function HabitacionDetail() {
    // Obtengo el parámetro 'habitacionId' de la URL
    const { habitacionId } = useParams();
    const navigate = useNavigate();

    // Filtro del array de habitaciones por el ID del parámetro
    // Busco la habitación correspondiente en el array por ID
    const habitacion = habitaciones.find((h) => h.id === parseInt(habitacionId));

    // useEffect para cambiar dinámicamente el título de la pestaña
    useEffect(() => {
        // Verifico si la habitación existe
        if (habitacion) {
            // Si la habitación existe, muestro su nombre en el título
            document.title = ` ${habitacion.nombre} - San Remo Hotel`;
            // Imprimo en la consola para comprobar que se cambió correctamente
            console.log(" Título cambiado a:", document.title);
        } else {
            // Si no existe, muestro un mensaje de error
            document.title = "Habitación no encontrada";
            // Imprimo en consola para verificar
            console.log(" Título cambiado a:", document.title);
        }

        // El efecto se ejecuta cada vez que cambia la variable 'habitacion'
    }, [habitacion]);


    // Si no se encuentra la habitación, muestro mensaje y botón de volver
    if (!habitacion) {
        return (
            <section className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">Habitación no encontrada</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className=" bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base justify-start items-center cursor-pointer"
                    >
                        Volver

                    </button>
                </div>
            </section>
        );
    }

    // Si la habitación existe, muestro toda su información
    return (
        <section className="max-w-4xl mx-auto px-4 py-10 font-[Glory] ">
            <h1 className=" text-3xl sm:text-3xl lg:text-4xl font-bold mb-10 mt-8 text-center">{habitacion.nombre}</h1>
            <img
                src={habitacion.imagen}
                alt={habitacion.nombre}
                className="w-full rounded-lg mb-6"
            />

            <div className="mb-4">
                <h4 className="font-bold text-[25px] ">Capacidad</h4>
                <p className="mb-3  text-[18px] mt-3">Hasta {habitacion.capacidad} personas</p>
            </div>

            <div className="mb-4">
                <h4 className="font-bold  text-[25px] mb-3">Precio</h4>
                <p className="mb-3  text-[18px] mt-3">${habitacion.precio} por noche</p>
            </div>

            <div className="mb-6">
                <h4 className="font-bold text-[25px] mb-3">Servicios</h4>
                <ul className="list-disc ml-5 text-lg">
                    {habitacion.servicios.map((serv, index) => (
                        <li key={index} className="flex items-center ">
                            <i className="bx bx-check mr-2 "></i> {/* icono */}
                            {serv}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón Reservar */}
            <ButtonReservar texto="Reservar"
            />
            {/* Botón Volver */}
            <button
                onClick={() => navigate(-1)}
                className="bg-[#d8b25e] text-[#3f2c0e] font-bold px-3 py-2 text-sm   sm:px-4 sm:py-2 sm:text-base lg:py-2 lg:text-2x rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 ml-5 items-center font-[Montserrat]  "
            >
                Volver
            </button>
        </section>
    );
}

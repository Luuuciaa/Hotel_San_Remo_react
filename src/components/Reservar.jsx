
import { handleReservar } from "./Eventos";
import { Seccion } from "../components/Children";
import { useState } from "react"
import { handleOnkeyDown } from "../components/Eventos";


export function Reservar() {


    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        cantidadpersonas: "",
        mensaje: "",        
        fechaEntrada: "",
        fechaSalida: "",


    });

    const [errors, setErrors] = useState({});

    // e (element)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const validate = () => {
        const newErrors = {};// Objeto donde guarda los errores encontrados

        // trim quita los espacios en blanco
        // validacion de nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        }

        // validacion de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "El email no es válido";

        }

        // Validacion de telefono
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El telefono es obligatorio";
        } else if (!/^\d{8,}$/.test(formData.telefono.trim())) {
            newErrors.telefono = "El teléfono debe tener al menos 8 números";
        }

        // Validación de cantidad de personas
        const cantidad = Number(formData.cantidadpersonas);

        if (!cantidad) {
            newErrors.cantidadpersonas = "La cantidad de personas es obligatoria";
        } else if (cantidad < 2) {
            newErrors.cantidadpersonas = "La cantidad de personas debe ser desde 2 personas";
        } else if (cantidad > 6) {
            newErrors.cantidadpersonas = "La cantidad de personas debe ser hasta 6 personas";
        }
        
        // Validacion de mensaje
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = "El mensaje es obligatorio";
        } else if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = "El mensaje debe contener al menos 10 caracteres";
        }

        //Validacion de fecha de entrada
        if (!formData.fechaEntrada.trim()) {
            newErrors.fechaEntrada = "Debe seleccionar una fecha de entrada";
        }

        //Validacion de fecha de salida
        if (!formData.fechaSalida.trim()) {
            newErrors.fechaSalida = "Debe seleccionar una fecha de salida"
        }

        return newErrors;// Devuelve el objeto con todos los errores encontrados
    }

    const handleSubmit = (e) => {
        e.preventDefault();   // Evita que el formulario recargue la página por defecto

        const validationErrors = validate();
        setErrors(validationErrors);


        //Verifico si hay al menos un error
        if (Object.keys(validationErrors).length > 0) {
            const firsError = Object.keys(validationErrors)[0];
            document.getElementById(firsError)?.focus(); // lleva el foco al input que falló
            return;// corta la ejecución para no enviar el formulario
        }

        // --- Si no hay errores ---
        // Simulamos el envio del formulario
        alert(`Datos enviados: ${JSON.stringify(formData, null, 2)}`);
        handleReservar(e);
        setFormData({
            nombre: "",
            email: "",
            telefono: "",
            cantidadpersonas: "",
            mensaje: "",       
            fechaEntrada: "",
            fechaSalida: "",

        });

    };


    return (
        <>
            <main>
                <Seccion titulo="Reserva de Habitación">

                    <form
                        action=""
                        method="get"
                        className="formulario-reservar bg-[#fcf8ef] p-6 max-w-[800px] mx-auto rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
                        id="FormReservar"
                        onSubmit={handleSubmit}>

                        {/* Nombre */}
                        <div className="flex flex-col">
                            <label htmlFor="nombre" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Nombre completo </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Ingrese su nombre completo"
                                title="Nombre Completo"
                                value={formData.nombre} // <--- valor controlado
                                onChange={handleChange} // <--- actualiza estado
                                aria-describedby={errors.nombre ? "nombre-error" : undefined}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.nombre ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.nombre && (
                            <p id="nombre-error" role="alert" className="text-sm text-red-600 mt-1">
                                {errors.nombre}
                            </p>
                        )}
                        {/* Email*/}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold mt-3 text-lg mb-5 font-[Arial] " >Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ingrese su email"
                                title="Correo electronico"
                                value={formData.email}
                                onChange={handleChange}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.email ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.email && (
                            <p id="email-error" role="alert" className="text-sm text-red-600 mt-1">
                                {errors.email}
                            </p>
                        )}

                        {/* Teléfono */}
                        <div className="flex flex-col">
                            <label htmlFor="telefono" className="font-bold mt-3 text-lg mb-5 font-[Arial]" >Teléfono</label>
                            <input
                                id="telefono"
                                name="telefono"
                                type="tel"
                                placeholder="Ingrese su telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.telefono ? "border-red-500" : ""}`}

                            />
                        </div>
                        {errors.telefono && (
                            <p id="telefono-error" role="alert" className="text-sm text-red-600 mt-1">
                                {errors.telefono}
                            </p>
                        )}
                        {/* Fecha de entrada */}
                        <div className="flex flex-col">
                            <label htmlFor="fechaEntrada" className="font-bold mt-3 text-lg mb-5 font-[Arial] " >Fecha de Entrada</label>
                            <input
                                id="fechaEntrada"
                                name="fechaEntrada"
                                type="date"
                                placeholder="Ingrese la fecha de entrada"
                                title="Fecha de entrada"
                                value={formData.fechaEntrada}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.fechaEntrada ? "border-red-500" : ""}`}
                            />
                            {errors.fechaEntrada && (
                                <p id="fechaEntrada-error" role="alert" className="text-sm text-red-600 mt-1">
                                    {errors.fechaEntrada}
                                </p>
                            )}
                        </div>
                        {/* Fecha de salida */}
                        <div className="flex flex-col">
                            <label htmlFor="fechaSalida" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Fecha de salida</label>
                            <input
                                id="fechaSalida"
                                name="fechaSalida"
                                type="date"
                                placeholder="Ingresa la fecha de salida"
                                title="Fecha de salida"
                                onChange={handleChange}
                                min={formData.fechaEntrada} // evita seleccionar una fecha menor que la de entrada
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.fechaSalida ? "border-red-500" : ""}`}
                            />
                            {errors.fechaSalida && (
                                <p id="fechaSalida-error" role="alert" className="text-sm text-red-600 mt-1">
                                    {errors.fechaSalida}
                                </p>
                            )}
                        </div>
                        {/* Cantidad de personas */}
                        <div className="flex flex-col">
                            <label htmlFor="cantidadePersonas" className="font-bold mt-3 text-lg mb-5 font-[Arial]" >Cantidad de personas</label>
                            <input
                                id="cantidadPersonas"
                                name="cantidadpersonas"
                                type="number"
                                placeholder="Ingresa la cantidad de personas"
                                value={formData.cantidadpersonas}
                                onChange={handleChange}
                                aria-describedby={errors.cantidadpersonas ? "cantidadpersonas-telefono" : undefined}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.cantidadpersonas ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.cantidadPersonas && (
                            <p id="consulta-error" role="alert" className="text-sm text-red-600 mt-1">
                                {errors.cantidadPersonas}
                            </p>
                        )}
                        {/* Comentario */}
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="comentarios" className="font-bold mt-3 text-lg mb-5 font-[Arial] ">Comentarios adicionales</label>
                            <textarea
                                id="comentarios"
                                name="mensaje"
                                placeholder="Ingresa el comentario"
                                title="Escribe tu comentario aquí"
                                rows="10"
                                onKeyDown={handleOnkeyDown}
                                value={formData.mensaje}
                                onChange={handleChange}
                                aria-describedby={errors.mensaje ? "name-error" : undefined}
                                className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.mensaje ? "border-red-500" : ""}`}
                            />
                        </div>
                        {errors.mensaje && (
                            <p id="mensaje-error" role="alert" className="text-sm text-red-600 mt-1">
                                {errors.mensaje}
                            </p>
                        )}

                        {/* Botón de reservar */}
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                value="reservar "
                                title="Reservar habitacion"
                                className="cursor-pointer w-[90px] mx-auto inline-flex justify-center text-center bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base mt-6 text-[17px] ">
                                Reservar
                            </button>
                        </div>
                    </form>

                </Seccion>

            </main>
        </>
    );
}



import { useState, useEffect } from "react";

// Componente para el formulario de habitaciones
export function HabitacionForm({ onSubmit, initialForm = {} }) {
    // Estado del formulario: guarda todos los campos
    const [form, setForm] = useState({
        nombre: "",
        imagen: "",
        capacidad: "",
        precio: "",
        descripcion: "",
        estado: "",

    });
    // Actualiza el formulario cuando cambia initialForm
    useEffect(() => {
        if (initialForm) {
            setForm({
                nombre: initialForm.nombre || "",
                imagen: initialForm.imagen || "",
                capacidad: initialForm.capacidad || "",
                descripcion: initialForm.descripcion || "",
                precio: initialForm.precio || "",
                estado: initialForm.estado || "",
            });
        }
    }, [initialForm]);

    // Estado para guardar los errores de validación
    const [errors, setErrors] = useState({});

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();// evita que la página se recargue
        const newErrors = {};// objeto temporal para guardar errores


        ///////// VALIDACIONES ////////
        // Validación de nombre
        if (!form.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        }

        // Validación de capacidad
        const capacidad = Number(form.capacidad);
        if (!capacidad) {
            newErrors.capacidad = "La cantidad de personas es obligatoria";
        } else if (capacidad < 2) {
            newErrors.capacidad = "La cantidad de personas debe ser al menos 2";
        } else if (capacidad > 6) {
            newErrors.capacidad = "La cantidad de personas no puede ser mayor a 6";
        }

        // Validación de precio
        const precio = Number(form.precio);
        if (!precio) {
            newErrors.precio = "El precio es obligatorio";
        } else if (precio <= 0) {
            newErrors.precio = "El precio debe ser mayor a 0";
        }


        // Validación de estado
        if (!form.estado) {
            newErrors.estado = "Selecciona un estado";
        }


        //Validación de  descripción
        if (!form.descripcion.trim()) {
            newErrors.descripcion = "La descripción es obligatoria";
        }

        //Validacion de la imagen
        if (!form.imagen) {
            newErrors.imagen = "La imagen es obligatoria";
        }

        // Guardamos los errores en el estado para mostrarlos
        setErrors(newErrors);

        // Si no hay errores, enviamos los datos para el backend
        if (Object.keys(newErrors).length === 0) {
            const habitacionData = {
                ...form,// copiamos todos los campos
                precio: Number(form.precio),// convertimos a número
                capacidad: Number(form.capacidad),
                estado: form.estado === "activo" ? true : false, // convertimos a booleano
                hotel: 1 //  el id del hotel 
            };
            // Llamamos a la función que nos pasó el componente padre para hacer el POST
            onSubmit(habitacionData);

            // Reset del formulario
            setForm({ nombre: "", imagen: "", capacidad: "", precio: "", descripcion: "", estado: "" });
        }

    };
    // Función que actualiza el estado del formulario cuando el usuario escribe
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };


    //////////FORMULARIO
    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#fcf8ef] p-6 rounded-2xl border border-white/10 shadow-md"
        >
            {/* Nombre */}
            <input
                name="nombre"
                placeholder="Nombre de la habitación"
                value={form.nombre}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[15px] mb-5 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                required
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

            {/* Precio */}
            <input
                type="number"
                name="precio"
                placeholder="Precio por noche"
                value={form.precio}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[15px] mb-5 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px]"
                required
            />
            {errors.precio && <p className="text-red-500 text-sm">{errors.precio}</p>}

            {/* Capacidad */}
            <input
                type="number"
                name="capacidad"
                placeholder="Capacidad de personas"
                value={form.capacidad}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[15px] mb-5 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px]"
                required
            />
            {errors.capacidad && <p className="text-red-500 text-sm">{errors.capacidad}</p>}


            {/* Descripción */}
            <textarea
                name="descripcion"
                placeholder="Descripción"
                value={form.descripcion}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[15px] mb-5 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px]"
                rows={4}
            />
            {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>}


            {/* Imagen */}
            <input
                type="text"
                name="imagen"
                placeholder="URL de la imagen"
                value={form.imagen || ""}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-[15px] mb-5 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px]"
                required
            />
            {errors.imagen && <p className="text-red-500 text-sm">{errors.imagen}</p>}


            {/* Estado */}
            <select
                id="estado"
                name="estado"
                value={form.estado}
                onChange={handleChange}
                title="Selecciona el estado"
                className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px]"
                required
            >
                <option value="" disabled hidden >Selecciona un estado</option>
                <option value="activo">Activo</option>
                <option value="reservado">Reservado</option>
            </select>

            {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}

            {/* Botón de guardar */}
            <div className="flex justify-end ">
                <button
                    type="submit"
                    className=" cursor-pointer mt-5 px-4 py-2 rounded-2xl bg-[#d8b25e] text-[#3f2c0e] font-bold hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300"
                >
                    Guardar
                </button>
            </div>
        </form>
    );

}

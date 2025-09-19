import { handleEnviar } from "../components/Eventos";
import { handleOnkeyDown } from "../components/Eventos";
import { useState } from "react"



export default function FormularioContacto() {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",        // <--- para el select
    contactoTelefono: false, // <--- checkbox
    contactoEmail: false,    // <--- checkbox
    mensaje: "",

  });


  const [errors, setErrors] = useState({});

  // e (element)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,//guarda los valores que el usuario escribe o selecciona.
      // si es checkbox guarda true/false
      // si es otro input guarda el texto
      [name]: type === "checkbox" ? checked : value,
    });
  }


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

    // Validación Motivo de consulta
    if (!formData.consulta.trim()) {
      newErrors.consulta = "Por favor selecciona un motivo de consulta";
    }

    // Validación checkboxes: al menos uno seleccionado
    if (!formData.contactoTelefono && !formData.contactoEmail) {
      newErrors.contacto = "Selecciona al menos un método de contacto";
    }
    // validacion de mensaje 
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe contener al menos 10 caracteres";
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
    handleEnviar(e);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      consulta: "",
      contactoTelefono: false,
      contactoEmail: false,
      mensaje: "",
    });

  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-[#fcf8ef] p-6 max-w-[800px] mx-auto rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 "
        id="FormContacto"

      >

        {/* Nombre */}
         <div className="flex flex-col">
        <label htmlFor="nombre" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Nombre completo</label>
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

        {/* Email */}
        <div className="flex flex-col">
        <label htmlFor="email" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Email </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ingrese su email"
          title="Correo electrónico"
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
        <label htmlFor="telefono" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Teléfono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="Ingrese su teléfono"
          value={formData.telefono}
          onChange={handleChange}
           aria-describedby={errors.telefono ? "email-telefono" : undefined}
          className={`w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] ${errors.telefono ? "border-red-500" : ""}`}

        />
        </div>
        {errors.telefono && (
          <p id="telefono-error" role="alert" className="text-sm text-red-600 mt-1">
            {errors.telefono}
          </p>
        )}


        {/* Consulta */}
        <div className="flex flex-col">
        <label htmlFor="consulta" className="font-bold mt-5 text-lg mb-5 font-[Arial] ">Motivo de consulta</label>
        <select
          id="consulta"
          name="consulta"
          value={formData.consulta}
          onChange={handleChange}
          title="Selecciona el motivo de tu consulta"
          className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
        >
          <option value="" >Selecciona el motivo</option>
          <option value="Reservas" >Reservas</option>
          <option value="Servicios">Servicios</option>
          <option value="Sugerencia">Sugerencia</option>
          <option value="Descuentos y Promociones">Descuentos y Promociones</option>
          <option value="Otro">Consulta</option>
        </select>
        </div>
        {errors.consulta && (
          <p id="consulta-error" role="alert" className="text-sm text-red-600 mt-1">
            {errors.consulta}
          </p>
        )}
        {/* Checkboxes */}
        <div className="flex flex-col">
        <div className="checkbox flex items-center gap-2 my-2"  >
          <input
            id="contactoTelefono"
            type="checkbox"
            name="contactoTelefono"
            checked={formData.contactoTelefono}
            onChange={handleChange}
            className="w-4 h-4 accent-[#d8b25e] cursor-pointer"
          />
          <label htmlFor="contactoTelefono" className=" mt-5 text-lg font-bold cursor-pointer font-[Arial]">Prefiero ser contactado por teléfono</label>
        </div>

        <div className="checkbox flex items-center gap-2 my-2">
          <input
            id="contactoEmail"
            type="checkbox"
            name="contactoEmail"
            checked={formData.contactoEmail}
            onChange={handleChange}
            className="w-4 h-4 accent-[#d8b25e]"
          />
          <label htmlFor="contactoEmail" className="mt-5 text-lg font-bold cursor-pointer  font-[Arial] " >Prefiero ser contactado por correo electrónico</label>
        </div>
        </div>
        {errors.contacto && (
          <p id="contacto-error" role="alert" className="text-sm text-red-600 mt-1">
            {errors.contacto}
          </p>
        )}
        {/* Mensaje */}
       <div className="flex flex-col">
        <label htmlFor="mensaje" className="font-bold mt-3 text-lg mb-5 font-[Arial] ">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="10"
          placeholder="Ingresa tu mensaje..."
          title="Escribe tu mensaje aquí"
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


        {/* Botón enviar */}
         <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          title="Enviar formulario"
          className="cursor-pointer w-[80px] mx-auto inline-flex justify-center text-center bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base mt-6 text-[17px] font-[Montserrat] ">
          Enviar</button>
          </div>
      </form>

    </>
  );
}
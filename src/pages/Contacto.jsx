
import { handleEnviar } from "../components/Eventos";
import { handleOnkeyDown } from "../components/Eventos";
import { Seccion } from "../components/Children";

export function Contacto() {
  return (
    <>
      <main>
        <Seccion titulo="CONTACTANOS">
          <p id="duda" className="text-center  mb-10  text-xl mr-5 ml-5 font-[League_Spartan] font-medium">
            Si tenés alguna duda o sugerencia, contactanos y a la brevedad nos comunicaremos con vos.
          </p>

          <form
            className="bg-[#fcf8ef] flex flex-col p-6 max-w-[600px] mx-auto rounded-lg shadow-md  "
            id="FormContacto"
            onSubmit={handleEnviar}
          >

            {/* Nombre */}
            <label htmlFor="nombre" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingrese su nombre completo"
              title="Nombre Completo"
              className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "

            />

            {/* Email*/}
            <label htmlFor="email" className="font-bold mt-3 text-lg mb-5 font-[Arial] " >Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingrese su email"
              title="Correo electrónico"
               className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
            />
            {/* Teléfono */}
            <label htmlFor="telefono" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="Ingrese su teléfono"
              title="Teléfono de contacto"
              className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
            />
            {/* Consulta */}
            <label htmlFor="consulta" className="font-bold mt-5 text-lg mb-5 font-[Arial] ">Motivo de consulta</label>
            <select
              id="consulta"
              name="consulta"
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

     
            {/* Checkboxes */}
            <div className="checkbox flex items-center gap-2 my-2"  >
              <input
                id="contactoTelefono"
                type="checkbox"
                name="contacto-telefono"
                value="telefono"
                className="w-4 h-4 accent-[#d8b25e] cursor-pointer"
              />
              <label htmlFor="contactoTelefono" className=" mt-5 text-lg font-bold cursor-pointer font-[Arial]">Prefiero ser contactado por teléfono</label>
            </div>

            <div className="checkbox flex items-center gap-2 my-2">
              <input
                id="contactoEmail"
                type="checkbox"
                name="contacto-email"
                value="email"
                className="w-4 h-4 accent-[#d8b25e]"
              />
              <label htmlFor="contactoEmail" className="mt-5 text-lg font-bold cursor-pointer  font-[Arial] " >Prefiero ser contactado por correo electrónico</label>
            </div>

            {/* Mensaje */}
            <label htmlFor="mensaje" className="font-bold mt-3 text-lg mb-5 font-[Arial] ">Mensaje</label>
            <textarea
              id="mensaje"
              rows="10"
              placeholder="Ingresa tu mensaje..."
              title="Escribe tu mensaje aquí"
              onKeyDown={handleOnkeyDown}
               className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
            />


            {/* Botón enviar */}
            <button 
            type="submit" 
            title="Enviar formulario" 
            className="cursor-pointer w-[80px] mx-auto inline-flex justify-center text-center bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base mt-6 text-[17px] font-[Montserrat] ">
              Enviar</button>
          </form>
        </Seccion>
      </main>


    </>
  );
}



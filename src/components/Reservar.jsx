
import { handleReservar } from "./Eventos";
import { Seccion } from "../components/Children";

export function Reservar() {


    return (
        <>
            <main>
               <Seccion titulo="Reserva de Habitación">

                <form
                    action=""
                    method="get"
                    className="formulario-reservar bg-[#fcf8ef] flex flex-col p-6 max-w-[600px] mx-auto rounded-lg shadow-md "
                    id="FormReservar"
                    onSubmit={handleReservar}>

                    {/* Nombre */}
                    <label htmlFor="nombre" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Nombre completo </label>
                    <input
                        id="nombre"
                        name="nombre "
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
                        title="Correo electronico"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    />

                    {/* Teléfono */}
                    <label htmlFor="telefono" className="font-bold mt-3 text-lg mb-5 font-[Arial]" >Teléfono</label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="Ingrese su telefono"
                        title="Telefono de contacto"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    />

                    {/* Fecha de entrada */}
                    <label htmlFor="fechaEntrada" className="font-bold mt-3 text-lg mb-5 font-[Arial] " >Fecha de Entrada</label>
                    <input
                        id="fechaEntrada"
                        name="fechaEntrada"
                        type="date"
                        placeholder="Ingrese la fecha de entrada"
                        title="Fecha de entrada"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    />

                    {/* Fecha de salida */}
                    <label htmlFor="fechaSalida" className="font-bold mt-3 text-lg mb-5 font-[Arial]">Fecha de salida</label>
                    <input
                        id="fechaSalida"
                        name="fechaSalida"
                        type="date"
                        placeholder="Ingresa la fecha de salida"
                        title="Fecha de salida"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    />


                    {/* Cantidad de personas */}
                    <label htmlFor="cantidadePersonas" className="font-bold mt-3 text-lg mb-5 font-[Arial]" >Cantidad de personas</label>
                    <input
                        id="cantidadPersonas"
                        name="cantidadPersonas"
                        type="number"
                        placeholder="Ingresa la cantidad de personas"
                        title="Cantidad de personas"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    />


                    {/* Comentario */}
                    <label htmlFor="comentarios" className="font-bold mt-3 text-lg mb-5 font-[Arial] ">Comentarios adicionales</label>
                    <textarea
                        id="comentarios"
                        placeholder="Ingresa el comentario"
                        title="Escribe tu comentario aquí"
                        rows="20"
                        className="w-full p-3 border rounded-md text-[15px] mb-3 focus:outline-none  focus:shadow-md bg-white font-[Montserrat] sm:text-[16px] lg:text-[17px] "
                    >

                    </textarea>

                    {/* Botón de reservar */}
                    <button
                        type="submit"
                        value="reservar "
                        title="Reservar habitacion"
                        className="cursor-pointer w-[90px] mx-auto inline-flex justify-center text-center bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base mt-6 text-[17px] ">
                        Reservar </button>
                </form>

             </Seccion>

         </main>
        </>
    );
}


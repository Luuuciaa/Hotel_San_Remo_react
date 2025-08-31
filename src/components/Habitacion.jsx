
import { ButtonReservar } from './ButtonReservar'
import { Link } from "react-router-dom";


//Componente de habitación  con sus propiedades
export function Habitacion({ id, nombre, imagen, capacidad, precio }) {
  return (
    <article className=" flex flex-col items-center justify-center 
                   border-2 border-[#3f2c0e] rounded-lg p-6 shadow-md 
                   hover:shadow-[0_8px_16px_#3f2c0e] 
                   w-full sm:w-[48%] lg:w-[30%] max-w-[600px] m-3 text-center font-[Glory] ">
      <h3 className='text-3xl sm:text-[25px] lg:text-[28px] font-bold mb-10 mt-5 font-[Glory]'>{nombre}</h3>
      <img src={imagen} alt={nombre} className='w-full rounded-[10px]' />
      <h4 className='font-bold text-[25px] mt-8 font-[Glory]'>Capacidad</h4>
      <h5 className='mb-3 font-bold text-[20px] mt-3 fo'><i className='bx bx-user mt-3 mr-2 text-2xl'></i>Hasta {capacidad} personas</h5>
      <p className='text-[#3f2c0e] font-bold text-[18px] mb-5'>Precio: $ {precio}  por noche </p>

      <div className='flex justify-start mt-4 gap-x-3'>
        {/* Botón Reservar */}
        <ButtonReservar texto="Reservar" />

        {/* Link al detalle de la habitación */}
        <Link
          to={`/habitaciones/${id}`}
          className="cursor-pointer w-full sm:w-auto  inline-flex justify-center text-center 
                     bg-[#d8b25e] text-[#3f2c0e] font-bold px-4 sm:px-6 py-2 rounded-full 
                     hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base sm:text-base font-[Montserrat] "
        >
          Ver detalle
        </Link>
      </div>

    </article>
  );
}



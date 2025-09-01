import { Link } from "react-router-dom";



// Componente reutilizable de botón para reservar
export function ButtonReservar({ texto, onClick }) {
  return (
    <Link 
      to="/reservar" 
      onClick={onClick} 
     className="bg-[#d8b25e] text-[#3f2c0e] font-bold px-3 py-2 text-sm   sm:px-4 sm:py-2 sm:text-base lg:py-2 lg:text-2x  rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300  ml-5 items-center font-[Montserrat] "
    >
      {texto}
    </Link>
  );
}
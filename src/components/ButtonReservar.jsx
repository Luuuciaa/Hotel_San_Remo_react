import { Link } from "react-router-dom";



// Componente reutilizable de botón para reservar
export function ButtonReservar({ texto, onClick }) {
  return (
    <Link 
      to="/reservar" 
      onClick={onClick} 
     className="bg-[#d8b25e] text-[#3f2c0e] font-bold px-6 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-base ml-5 items-center font-[Montserrat] "
    >
      {texto}
    </Link>
  );
}
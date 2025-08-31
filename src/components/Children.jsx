
import { NavLink } from "react-router-dom";

//Children para las secciones
export function Seccion({ titulo, children }) {
  return (
    <section>
      {titulo && <h1 className="text-3xl sm:text-4xl lg:text-4xl  font-bold mb-10 mt-20 text-center font-[Glory]">{titulo}</h1>}
      <div>{children}</div>
    </section>
  );
}

//Children para el menu de navegación
export function MenuLink ({to , children}){
  const link="bg-[#d8b25e] text-[#3f2c0e] font-bold  px-3 py-2 rounded-full hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300 text-2x font-[Montserrat]";

  return (
    <li>
      <NavLink to={to} className ={link}>
      {children}
      </NavLink>
      
    </li>
  );
}
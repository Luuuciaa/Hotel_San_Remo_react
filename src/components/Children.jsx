
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


//sm: → Small (≥ 640px) Se aplica cuando la pantalla mide 640 píxeles o más. celulares 
// lg: → Large (≥ 1024px) Se aplica cuando la pantalla mide 1024 píxeles o más. notebooks y monitores grandes.


//Children para el menu de navegación
export function MenuLink ({to , children}){
  const link="bg-[#d8b25e] text-[#3f2c0e] font-bold  px-2 py-1  sm:py-2 sm:text-2x   lg:py-2 lg:text-2x rounded-full  hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300  font-[Montserrat]";

  return (
    <li>
      <NavLink to={to} className ={link}>
      {children}
      </NavLink>
      
    </li>
  );
}
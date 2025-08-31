

//  Defino componente Servicios con sus propiedades

export function Servicios({ nombre, descripcion, icon }) {
  return (
    <article >
       {/* Título del servicio con icono */}
      <h4 className="font-bold text-[17px] sm:text-[20px] lg:text-[20px] flex items-center mb-3 mt-5">
        <i className={`bx ${icon} text-[#3f2c0e] text-4xl transition-transform duration-300 hover:scale-110 hover:rotate-6 mr-3`}></i>
        {nombre}
      </h4>
      
      {/* Descripción del servicio */}
      <p className="text-sm sm:text-sm lg:text-base leading-7 font-[League Spartan]">{descripcion}</p>
    </article>
  );
}
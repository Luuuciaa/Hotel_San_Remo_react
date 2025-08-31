
//Componente de Promos
export function Promos({ imagen, titulo, descripcion }) {
  return (
    <article className="flex flex-col items-center justify-center 
                   border-2 border-[#3f2c0e] rounded-lg p-6 shadow-md 
                   hover:shadow-[0_8px_16px_#3f2c0e] 
                   w-full sm:w-[48%] lg:w-[30%] max-w-[600px] m-3 text-center font-[Glory]">

      {/* Imagen de la promo */}
      <img className="w-full max-w-[400px] rounded-md mb-5" src={imagen} alt={titulo} />
      
      {/* Título de la promo */}
      <h3 className="mt-5 font-bold text-2xl mb-3">{titulo}</h3>

      {/* Descripción */}
      <p className="text-lg ">{descripcion}</p>
    </article>
  );
}

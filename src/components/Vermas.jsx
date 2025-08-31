
import { Seccion } from "./Children";
import {fotos} from "../data/fotos"

//Componente para el botón Vermás
export function Vermas() {
  return (
    <main>
   {/* Sección de galería */}
      <section className="galeria ">
       <Seccion titulo="GALERÍA DE FOTOS">
        <div className="px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {fotos.map((foto, index) => (
            <img
              key={index}
              src={foto.src}
              alt={foto.alt}
            className="w-full h-auto aspect-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
        </Seccion>
      </section>
    </main>
  );
      
}

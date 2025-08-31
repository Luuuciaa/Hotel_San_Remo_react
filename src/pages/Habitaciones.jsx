
import { habitaciones } from "../data/habitaciones";
import{Habitacion }  from "../components/Habitacion";
import { Seccion } from "../components/Children";


              

export function Habitaciones() {
  return (
    <>
      <main>
        <Seccion titulo="HABITACIONES">
          <div className="habitaciones-container flex flex-wrap justify-center gap-6">
            {/* Recorre el array de habitaciones y renderiza un componente Habitacion por cada una */}
            {habitaciones.map((hab) => (
              <Habitacion
                key={hab.id}
                id={hab.id}
                nombre={hab.nombre}
                imagen={hab.imagen}
                capacidad={hab.capacidad}
                precio={hab.precio}
                servicios={hab.servicios}
              />
            ))}
          </div>
        </Seccion>
      </main>
    </>
  );
}
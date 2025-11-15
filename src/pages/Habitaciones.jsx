
import { habitaciones } from "../data/habitaciones";
import { Habitacion } from "../components/Habitacion";
import { Seccion } from "../components/Children";
import { useHabitaciones } from "../hooks/useHabitaciones"; // importamos el hook


export function Habitaciones() {
  // Usamos el hook para obtener las habitaciones desde la API
  // data -> listado de habitaciones
  // loading -> si los datos están cargando
  // error -> si hubo un error al cargar
  const { data: habitaciones, loading, error } = useHabitaciones(); 

// Si los datos todavía se están cargando, mostramos un mensaje
  if (loading) return <p>Cargando habitaciones...</p>;
  
  // Si hubo un error al cargar los datos, lo mostramos
  if (error) return <p>Error al cargar habitaciones: {error.message || error}</p>;
  
// Si no hay error y los datos están cargados, renderizamos 
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
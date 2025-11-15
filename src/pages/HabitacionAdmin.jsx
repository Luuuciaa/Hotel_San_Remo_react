import { useState } from 'react'
import { useHabitaciones } from "../hooks/useHabitaciones"
import { HabitacionForm } from "../components/HabitacionForm";
import { HabitacionList } from "../components/HabitacionList";
import Swal from "sweetalert2";


//FUNCION PARA ADMINISTRAR LAS HABITACIONES
export function HabitacionAdmin() {

  // Estado que me va a permitir saber si se trata de una edicion
  // editing contenga los datos de la habitación  a editar.
  const [habitacionEditing, setHabitacionEditing] = useState(null);

  //Usamos el custom hook para manejar habitaciones
  const {
    data: habitacionesCH,//Renombramos data con habitaciones
    loading,
    error,
    fetchAll,
    create,
    update,
    remove
  } = useHabitaciones();

  // Definimos la función para crear una habitación
  const handleCreate = async (payloadHabitacion) => {
    try {
      // Llamamos al servicio para crear la habitación
      await create(payloadHabitacion);
      await fetchAll(); // Refresca la lista desde la API y actualiza  

      // Mostramos mensaje de éxito con SweetAlert2
      Swal.fire({
        icon: 'success',          // tipo de alerta
        title: '¡Habitación creada!',
        text: `La habitación "${payloadHabitacion.nombre}" se creó correctamente.`,
        timer: 2000,              // se cierra automáticamente en 2 segundos
        showConfirmButton: false  // no mostramos botón de aceptar
      });

    } catch (error) {
      // En caso de error, mostramos alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `No se pudo crear la habitación: ${error.message || error}`,
      });
    }
  };

  //definimos funcion que permite obtener la habitación que se quiere editar
  const handleEdit = (habitacion) => {
    //cargamos el curso en el estado courseEditing
    setHabitacionEditing(habitacion);
  }


  // Definimos la función que se comunica con el servicio para actualizar una habitación
  const handleUpdate = async (payloadHabitacion) => {
    try {
      // Llamamos al servicio para actualizar la habitación
      await update(habitacionEditing.id, payloadHabitacion);

      // Reiniciamos el estado de edición
      setHabitacionEditing(null);
      await fetchAll();   // Refresca la lista desde la API y actualiza
      // Mostramos mensaje de éxito con SweetAlert2
      Swal.fire({
        icon: 'success',          // tipo de alerta
        title: '¡Habitación actualizada!',
        text: `La habitación "${payloadHabitacion.nombre}" se actualizó correctamente.`,
        timer: 2000,              // se cierra automáticamente en 2 segundos
        showConfirmButton: false  // no mostramos botón de aceptar
      });
    } catch (error) {
      // En caso de error, mostramos alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `No se pudo actualizar la habitación: ${error.message || error}`,
      });
    }
  };

  //Funcion para eliminar una habitación 
  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: `¿Eliminar la habitación "${name}"?`,
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await remove(id); //función de eliminación
        Swal.fire({
          title: "Eliminado",
          text: `La habitación "${name}" fue eliminada correctamente`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "No se pudo eliminar la habitación",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="px-4 py-8 my-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[30px] font-bold mb-10 mt-10 text-center font-[Glory] ">Administrar habitaciones</h1>
          <button
            className=" text-[15px]  px-4 py-2 rounded-2xl bg-[#d8b25e] text-[#3f2c0e] font-bold hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300"
            onClick={() => setHabitacionEditing(null)}
          >
            Nueva habitación
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            {loading ? (
              <p className="text-xl sm:text-2xl md:text-2xl font-semibold ">Cargando...</p>
            ) : (
              <HabitacionList
                habitaciones={habitacionesCH}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
            {error && <p className="text-red-400">Error: {String(error)}</p>}
          </div>

          <aside className="md:col-span-1">
            <HabitacionForm
              initialForm={habitacionEditing || {}}
              onSubmit={habitacionEditing ? handleUpdate : handleCreate}
            />
            <div className="bg-[#e7e0cf] p-4 rounded border border-white/10 mt-4">
              <p className="text-balck font-[Montserrat]">
                Seleccione una habitación para editar o cree una nueva.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
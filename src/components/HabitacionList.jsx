//onEdit y onDelete, son funciones que se enviando a la componente para que pueda ejecutarlas internamente
export function HabitacionList({ habitaciones, onEdit, onDelete }) {

    //Si no hay habitaciones muestro el mensaje
   if (!habitaciones?.length) return <p className="text-center mt-30 text-xl sm:text-2xl md:text-2xl font-semibold mb-4">No hay habitaciones</p>


    //Si hay habitaciones
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {habitaciones.map((hab) => (
                <div key={hab.id }>
                    <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-[0_8px_16px_#3f2c0e] transition-shadow duration-300 ">
                        {/* Imagen */}
                        <img
                            src={hab.imagen}
                            alt={hab.nombre}
                            className="w-full h-40 object-cover rounded-[10px]"
                        />
                        {/* Nombre */}
                        <h3 className="mt-4 text-2xl font-bold text-center font-[Glory]">{hab.nombre}</h3>
                        {/* Capacidad */}
                        <p className=" font-bold text-[17px] mt-2">Capacidad: {hab.capacidad} personas</p>
                        {/* Precio */}
                        <p className="font-bold text-sm mt-1">Precio: ${hab.precio} por noche</p>
                        {/* Botones para eliminar y editar  */}
                        <div className="mt-4 flex gap-3">
                            <button
                                onClick={() => onEdit(hab)}
                                className="rounded-2xl px-4 py-2 bg-[#d8b25e] text-[#3f2c0e] font-bold hover:bg-[#3f2c0e] hover:text-[#fcf8ef] transition-colors duration-300"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => onDelete(hab.id, hab.nombre)}
                                className="rounded-2xl px-4 py-2 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors duration-300"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
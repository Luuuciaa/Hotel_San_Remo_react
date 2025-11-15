import { useState, useEffect, useCallback, } from "react";
import { getHabitaciones , createHabitacion, updateHabitacion, deleteHabitacion  } from "../services/HabitacionesApi"; 
export function useHabitaciones() {

    //Estado para la lista de habitaciones , carga y error

    const [data, setData] = useState([]);//Estado que maneja la lista de habitaciones traido desde la  API.
    const [loading, setLoading] = useState(false); // Estado para manejar la carga de datos
    const [error, setError] = useState(null);// // Estado para manejar errores

    //Funciones especificas  para el CRUD

    //Funcion para obtener todo las habitaciones
    const fetchAll = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const habitacionesList = await getHabitaciones();
            //Actualizar el estado de habitaciones con la respuesta
            setData(habitacionesList);
            //Si hay un error
        } catch (e) {
            //Actualizo el estado de error con el posible error de la petición
            setError(e)
        } finally {
            //Actualizo el estado de carga en falso para que sepa que ya termino
            setLoading(false);
        }
    }, []);


    //Efecto para cargar las habitaciones
    useEffect(() => {
        fetchAll()
    }, [fetchAll])


 //FUNCION PARA CREAR UNA HABITACIÓN
const create = async (payloadHabitacion) => {
    setLoading(true);
    setError(null);
    try {
        // Agregar hotel al payload si no viene
        const payload = {
            ...payloadHabitacion,
            hotel: payloadHabitacion.hotel || 1, // el ID del hotel
        };

        const habitacionCreated = await createHabitacion(payload);
        setData(prev => [...prev, habitacionCreated]);
    } catch (e) {
        setError(e);
    } finally {
        setLoading(false);
    }
};


    //FUNCION PARA ACTUALIZAR LA HABITACION
    const update = async (id, payloadHabitacion) => {
        setLoading(true);
        setError(null);
        try {
            const habitacionUpdate = await updateHabitacion(id, payloadHabitacion);
            //Actualizar la habitacion en el estado del  listado de habitaciones anterior
            // se usa map para crear un nuevo array con la habitacion  actualizada buscando por el id 
            setData(prev => prev.map(h => h.id === id ? habitacionUpdate : h))

        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    //FUNCION PARA ELIMINAR UNA HABITACIÓN
    const remove = async (id) => {
        setLoading(true);
        setError(null);
        try {
            //llamo al servicio para eliminar la habitacion 
            await deleteHabitacion(id);
            //actualizado el estado del listado de habitaciones
            //usamos filter para crear un nuevo array con las habitaciones que no contengan la id a eliminar.
            setData(prev => prev.filter(h => h.id != id))
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    // Devolver los recursos que queremos exponer del customHook
    return {data, loading, error, fetchAll, create, update, remove }
}
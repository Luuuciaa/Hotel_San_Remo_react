// Guarda la dirección base (URL) de la API en Django
const BASE_URL = 'https://hotelsanremoapi-production.up.railway.app/api/habitacion/';


/**
 * Función genérica para hacer peticiones a la API
 * @param {string} path Ruta adicional a la URL base
 * @param {object} options Opciones del fetch (method, body, headers, etc)
 */
async function request(path = '', options = {}) {
     // Si path existe, lo agregamos a la URL base (y agregamos '/' al final)
    const url = path ? `${BASE_URL}${path}/` : BASE_URL;

    // Obtener token de localStorage
    const token = localStorage.getItem('auth_token');

    // Headers por defecto
    const defaultHeaders = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };

    // Combinar headers de manera segura con opciones que pueda pasar la función
    const fetchOptions = {
        headers: { ...defaultHeaders, ...(options.headers || {}) },
        ...options
    };
  // Hacemos la petición
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
        let text = '';
        try {
            text = await res.text();// intentamos obtener el mensaje de error
        } catch {}
        const err = new Error(`Request failed ${res.status}`);
        err.status = res.status;
        err.body = text;
        throw err;
    }
 // Si la respuesta es OK, obtenemos el contenido
    const content = await res.text();
    try {
        return content ? JSON.parse(content) : null;// intentamos parsear JSON
    } catch {
        return content;// si no es JSON, devolvemos como texto
    }
}

// ================= CRUD =================

// Obtener todas las habitaciones
export function getHabitaciones() {
    return request();// usamos la función genérica sin path
}

// Obtener una habitación por ID
export function getHabitacion(id) {
    return request(String(id));// pasamos el id como path

}

// Crear una habitación
export function createHabitacion(habitacion) {
    return request('', {// path vacío porque usamos la base URL
        method: 'POST',// método POST para crear
        body: JSON.stringify(habitacion)
    });
}

// Actualizar una habitación
export function updateHabitacion(id, updates) {
    return request(String(id), {// pasamos el id como path
        method: 'PUT',// método PUT para actualizar
        body: JSON.stringify(updates)// enviamos los datos a actualizar
    });
}

// Eliminar una habitación
export function deleteHabitacion(id) {
    return request(String(id), {// pasamos el id como path
        method: 'DELETE' // método DELETE
    });
}

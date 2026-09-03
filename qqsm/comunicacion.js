/**
 * Módulo para la comunicación con la API de Google Sheets y gestión de caché local.
 * Es reutilizable para cualquier aplicación que necesite leer y escribir datos.
 */
const GoogleSheet = {
    // Clave base para el almacenamiento local. Se añadirá el grupo (e.g., 'nombresJugadoresCache-8-3')
    CLAVE_BASE_CACHE: 'nombresJugadoresCache',
    // 24 horas en milisegundos (24 * 60 * 60 * 1000)
    TIEMPO_EXPIRACION: 86400000, 

    /**
     * Obtiene la lista de nombres. Acepta la URL y el grupo para la caché.
     * @param {string} url - La URL específica del Apps Script para este grupo.
     * @param {string} group - El nombre del grupo para crear una clave de caché única.
     * @returns {Promise<Array<string>>} Una promesa que resuelve a un array de nombres.
     */
    obtenerNombres: async function(url, group) {
        if (!url) return [];
        const cacheKey = `${this.CLAVE_BASE_CACHE}-${group}`;
        const ahora = new Date().getTime();
        const datosCache = localStorage.getItem(cacheKey);

        // 1. INTENTAR CARGAR DESDE CACHÉ
        if (datosCache) {
            try {
                const cache = JSON.parse(datosCache);
                // Verificar si la caché no ha expirado
                if (ahora < cache.expiracion) {
                    console.log(`Cargando nombres del grupo ${group} desde LocalStorage (RÁPIDO).`);
                    return cache.nombres;
                } else {
                    console.log(`Caché de nombres del grupo ${group} expirada. Se recargará de la red.`);
                    localStorage.removeItem(cacheKey); // Limpiar caché antigua
                }
            } catch (e) {
                console.error("Error al leer caché, forzando recarga:", e);
                localStorage.removeItem(cacheKey);
            }
        }

        // 2. CARGAR DESDE GOOGLE APPS SCRIPT (LENTO)
        console.log(`Cargando nombres del grupo ${group} desde Google Apps Script (LENTO). URL: ${url}`);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor.");
            }
            const nombresArray = await response.json();

            // 3. GUARDAR EN CACHÉ PARA FUTURAS CARGAS
            if (nombresArray && nombresArray.length > 0) {
                const nuevaExpiracion = ahora + this.TIEMPO_EXPIRACION;
                const nuevoCache = {
                    nombres: nombresArray,
                    expiracion: nuevaExpiracion
                };
                localStorage.setItem(cacheKey, JSON.stringify(nuevoCache));
                console.log(`Nombres cargados de la red y guardados en caché para el grupo ${group}.`);
            }

            return nombresArray;
        } catch (error) {
            console.error(`Error al obtener los nombres del grupo ${group}:`, error);
            console.error("SUGERENCIA: Revisa tu conexión, la URL proporcionada y los permisos del Apps Script.");
            return []; // Devuelve un array vacío en caso de error
        }
    },

    /**
     * Guarda el resultado de un juego en la hoja de cálculo. Acepta la URL dinámicamente.
     * @param {string} url - La URL específica del Apps Script para este grupo.
     * @param {object} datosJuego - Un objeto con los datos a guardar.
     * @returns {Promise<object>} Una promesa que resuelve con la respuesta del servidor.
     */
    guardarResultado: async function(url, datosJuego) {
        if (!url) return { status: "error", message: "URL no definida para guardar resultados." };
        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosJuego)
            });
            return { status: "success", message: "Datos enviados correctamente." };
        } catch (error) {
            console.error("Error al guardar el resultado:", error);
            return { status: "error", message: error.message };
        }
    }
};
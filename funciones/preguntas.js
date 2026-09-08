/**
 * Banco de preguntas para 9° Grado: Funciones.
 * Estructura preparada para Highcharts.
 */
const BANCO_PREGUNTAS = [
    {
        titulo: "Interpretación: Un tanque con 20L se llena a 5L/min. ¿Qué indica el 20 en f(x) = 5x + 20?",
        opciones: ["Velocidad de llenado", "Estado inicial (Corte Y)", "Tiempo máximo", "Capacidad total"],
        correcta: "Estado inicial (Corte Y)",
        tipoGrafico: 'line',
        datos: [[0, 20], [2, 30], [4, 40], [6, 50]],
        ejeX: "Tiempo (min)", ejeY: "Litros"
    },
    {
        titulo: "Física: ¿En qué segundo alcanza este proyectil su altura máxima según la gráfica?",
        opciones: ["0 seg", "2 seg", "4 seg", "20 seg"],
        correcta: "2 seg",
        tipoGrafico: 'areaspline',
        datos: [0, 15, 20, 15, 0],
        ejeX: "Segundos", ejeY: "Metros"
    },
    {
        titulo: "Tipos: f(x) = 3x pasa por el origen (0,0) y aumenta constante. ¿Qué tipo es?",
        opciones: ["Cuadrática", "Afín", "Lineal", "Constante"],
        correcta: "Lineal",
        tipoGrafico: 'line',
        datos: [[0,0], [1,3], [2,6], [3,9]],
        ejeX: "x", ejeY: "f(x)"
    },
    {
        titulo: "Análisis: En el intervalo de Hora 2 a Hora 4, ¿cómo es el comportamiento térmico?",
        opciones: ["Constante", "Ascendente", "Decreciente", "Lineal positiva"],
        correcta: "Decreciente",
        tipoGrafico: 'line',
        datos: [10, 25, 18, 10, 5],
        ejeX: "Horas", ejeY: "Temp °C"
    },
    {
        titulo: "Dominio: Si f(x) es el costo de 'x' manzanas, ¿por qué x no puede ser negativo?",
        opciones: ["Por el precio alto", "No existen cantidades negativas", "La función es curva", "El dominio es infinito"],
        correcta: "No existen cantidades negativas",
        tipoGrafico: 'column',
        datos: [[1, 500], [2, 1000], [3, 1500]],
        ejeX: "Manzanas", ejeY: "Precio $"
    },
    {
        titulo: "Pendiente: Si una función baja de izquierda a derecha (m < 0), se dice que es:",
        opciones: ["Creciente", "Decreciente", "Nula", "Paralela"],
        correcta: "Decreciente",
        tipoGrafico: 'line',
        datos: [[0, 10], [1, 8], [2, 6], [3, 4]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Servicios Públicos: El cargo fijo es $5000 y cada kWh vale $200. ¿Cuál es la función?",
        opciones: ["f(x)=200x", "f(x)=5000x + 200", "f(x)=200x + 5000", "f(x)=5200x"],
        correcta: "f(x)=200x + 5000",
        tipoGrafico: 'line',
        datos: [[0, 5000], [10, 7000], [20, 9000]],
        ejeX: "Consumo kWh", ejeY: "Total $"
    },
    {
        titulo: "Cuadrática: ¿Cómo se llama el punto más bajo de la siguiente parábola?",
        opciones: ["Origen", "Vértice", "Raíz", "Pendiente"],
        correcta: "Vértice",
        tipoGrafico: 'line',
        datos: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Identificación: ¿Qué gráfica representa una función constante?",
        opciones: ["Una línea diagonal", "Una curva", "Una línea horizontal", "Un punto"],
        correcta: "Una línea horizontal",
        tipoGrafico: 'line',
        datos: [[0, 5], [1, 5], [2, 5], [3, 5]],
        ejeX: "Tiempo", ejeY: "Velocidad"
    },
    {
        titulo: "Economía: El punto donde los costos igualan a las ventas se conoce como:",
        opciones: ["Punto máximo", "Punto de equilibrio", "Intersección Y", "Dominio"],
        correcta: "Punto de equilibrio",
        tipoGrafico: 'line',
        datos: [[0, 0], [5, 10], [10, 20]],
        ejeX: "Unidades", ejeY: "Dinero"
    },
    {
        titulo: "Geometría: El área de un cuadrado A(L) = L². ¿Qué tipo de función es?",
        opciones: ["Lineal", "Afín", "Cuadrática", "Inversa"],
        correcta: "Cuadrática",
        tipoGrafico: 'areaspline',
        datos: [[1, 1], [2, 4], [3, 9], [4, 16]],
        ejeX: "Lado", ejeY: "Área"
    },
    {
        titulo: "Interpretación: Si la pendiente (m) es cero, ¿qué ocurre con la función?",
        opciones: ["Sube rápido", "Es horizontal", "Es vertical", "No existe"],
        correcta: "Es horizontal",
        tipoGrafico: 'line',
        datos: [[0, 3], [5, 3], [10, 3]],
        ejeX: "x", ejeY: "f(x)"
    },
    {
        titulo: "Variable: En el costo de gasolina según los galones, ¿cuál es la variable independiente?",
        opciones: ["El precio total", "Los galones", "La marca", "El tanque"],
        correcta: "Los galones",
        tipoGrafico: 'scatter',
        datos: [[1, 9000], [2, 18000], [3, 27000]],
        ejeX: "Galones", ejeY: "Precio"
    },
    {
        titulo: "Crecimiento: f(x) = 2^x muestra un crecimiento muy rápido. Se llama:",
        opciones: ["Lineal", "Exponencial", "Cuadrática", "Constante"],
        correcta: "Exponencial",
        tipoGrafico: 'line',
        datos: [[0, 1], [1, 2], [2, 4], [3, 8], [4, 16]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Corte X: Los puntos donde la gráfica toca el eje X se llaman:",
        opciones: ["Vértices", "Raíces o ceros", "Ordenadas", "Pendientes"],
        correcta: "Raíces o ceros",
        tipoGrafico: 'line',
        datos: [[-1, 0], [0, -1], [1, 0]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Afín: ¿Cuál es el valor de 'b' (intercepto) en f(x) = -2x + 7?",
        opciones: ["-2", "7", "x", "0"],
        correcta: "7",
        tipoGrafico: 'line',
        datos: [[0, 7], [1, 5], [2, 3]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Simetría: Una parábola es simétrica respecto a una línea vertical llamada:",
        opciones: ["Eje X", "Eje de simetría", "Radio", "Tangente"],
        correcta: "Eje de simetría",
        tipoGrafico: 'line',
        datos: [[-2, 4], [0, 0], [2, 4]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Tabulación: Si f(x) = x + 5, ¿cuál es el valor de y cuando x = 10?",
        opciones: ["5", "10", "15", "50"],
        correcta: "15",
        tipoGrafico: 'scatter',
        datos: [[0, 5], [5, 10], [10, 15]],
        ejeX: "x", ejeY: "y"
    },
    {
        titulo: "Rango: Si la altura máxima de un balón es 10m y cae al suelo (0m), el rango es:",
        opciones: ["De 0 a 10", "De -10 a 10", "Solo 10", "Infinito"],
        correcta: "De 0 a 10",
        tipoGrafico: 'areaspline',
        datos: [[0, 0], [1, 10], [2, 0]],
        ejeX: "Tiempo", ejeY: "Altura"
    },
    {
        titulo: "Comparación: ¿Cuál función crece más rápido: f(x)=2x o g(x)=10x?",
        opciones: ["f(x)", "g(x)", "Igual", "Ninguna"],
        correcta: "g(x)",
        tipoGrafico: 'line',
        datos: [[0, 0], [1, 2], [1, 10]],
        ejeX: "x", ejeY: "Crecimiento"
    }
];
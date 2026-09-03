// Banco de 40 preguntas de enteros para 7.º grado (Unicode)
const cardData = [
    // Sumas
    { question: "−8 + 12", options: ["4", "−4", "20", "−20"], correctIndex: 0 },
    { question: "−15 + (−5)", options: ["10", "−20", "20", "−10"], correctIndex: 1 },
    { question: "14 + (−9)", options: ["−5", "23", "5", "−23"], correctIndex: 2 },
    { question: "−25 + 25", options: ["50", "−50", "1", "0"], correctIndex: 3 },
    { question: "−18 + 7", options: ["−11", "11", "−25", "25"], correctIndex: 0 },
    { question: "30 + (−12)", options: ["−18", "18", "42", "−42"], correctIndex: 1 },
    { question: "−6 + (−14)", options: ["8", "−8", "−20", "20"], correctIndex: 2 },
    { question: "−40 + 50", options: ["−10", "90", "−90", "10"], correctIndex: 3 },
    { question: "22 + (−30)", options: ["−8", "8", "−52", "52"], correctIndex: 0 },
    { question: "−13 + 13", options: ["26", "0", "−26", "1"], correctIndex: 1 },
    { question: "−7 + (−11)", options: ["4", "−4", "−18", "18"], correctIndex: 2 },
    { question: "19 + (−6)", options: ["−13", "25", "−25", "13"], correctIndex: 3 },
    { question: "−33 + 10", options: ["−23", "23", "−43", "43"], correctIndex: 0 },
    { question: "−5 + (−15)", options: ["10", "−20", "20", "−10"], correctIndex: 1 },

    // Restas
    { question: "−9 − 6", options: ["−3", "3", "−15", "15"], correctIndex: 2 },
    { question: "12 − (−8)", options: ["4", "−4", "−20", "20"], correctIndex: 3 },
    { question: "−15 − (−5)", options: ["−10", "10", "−20", "20"], correctIndex: 0 },
    { question: "8 − 17", options: ["9", "−9", "25", "−25"], correctIndex: 1 },
    { question: "−20 − 10", options: ["−10", "10", "−30", "30"], correctIndex: 2 },
    { question: "0 − (−14)", options: ["−14", "0", "1", "14"], correctIndex: 3 },
    { question: "−11 − (−11)", options: ["0", "−22", "22", "1"], correctIndex: 0 },
    { question: "16 − (−4)", options: ["12", "20", "−12", "−20"], correctIndex: 1 },
    { question: "−7 − 8", options: ["1", "−1", "−15", "15"], correctIndex: 2 },
    { question: "25 − 30", options: ["5", "55", "−55", "−5"], correctIndex: 3 },
    { question: "−18 − (−6)", options: ["−12", "12", "−24", "24"], correctIndex: 0 },
    { question: "5 − 18", options: ["13", "−13", "23", "−23"], correctIndex: 1 },
    { question: "−30 − (−30)", options: ["−60", "60", "0", "1"], correctIndex: 2 },

    // Multiplicaciones
    { question: "(−4) × 5", options: ["20", "9", "−9", "−20"], correctIndex: 3 },
    { question: "(−6) × (−3)", options: ["18", "−18", "−9", "9"], correctIndex: 0 },
    { question: "7 × (−8)", options: ["56", "−56", "−15", "15"], correctIndex: 1 },
    { question: "(−9) × (−2)", options: ["−18", "−11", "18", "11"], correctIndex: 2 },
    { question: "10 × (−5)", options: ["50", "5", "−5", "−50"], correctIndex: 3 },
    { question: "(−3) × 7", options: ["−21", "21", "−10", "10"], correctIndex: 0 },
    { question: "(−8) × (−4)", options: ["−32", "32", "−12", "12"], correctIndex: 1 },
    { question: "6 × (−6)", options: ["36", "0", "−36", "−12"], correctIndex: 2 },
    { question: "(−5) × (−5)", options: ["−25", "−10", "10", "25"], correctIndex: 3 },
    { question: "(−12) × 2", options: ["−24", "24", "−10", "10"], correctIndex: 0 },
    { question: "9 × (−4)", options: ["36", "−36", "−13", "13"], correctIndex: 1 },
    { question: "(−7) × (−3)", options: ["−21", "−10", "21", "10"], correctIndex: 2 },
    { question: "(−15) × 0", options: ["−15", "15", "1", "0"], correctIndex: 3 }
];
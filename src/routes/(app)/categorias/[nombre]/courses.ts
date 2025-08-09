interface Course {
    name: String,
    difficulty: CourseDifficulty,
    description: String,
    rating: Number,
    author: String,
}

enum CourseDifficulty {
    Principiante = 'Principiante',
    Intermedio = 'Intermedio',
    Avanzado = 'Avanzado',
}

export const courses: Course[] = [
    {
        name: "Bases",
        difficulty: CourseDifficulty.Principiante,
        description: "Introducciones y lecciones básicas del\
            lenguaje de señas ariqueño, ideal para principiantes.",
        rating: 5.0,
        author: "AricaSeña",
    },
    {
        name: "Conversaciones",
        difficulty: CourseDifficulty.Avanzado,
        description: "Practica tu nivel conversacional con estas clases\
            que te ayudarán a obtener una mayor fluidez.",
        rating: 4.0,
        author: "Usuario1",
    },
    {
        name: "Animales de Nuestro Entorno",
        difficulty: CourseDifficulty.Intermedio,
        description: "Los animales son parte de nuestras vidas tanto como\
            las personas. En este curso aprenderás las formas típicas de\
            hablar de ellos y con ellos.",
        rating: 4.0,
        author: "Usuario1"
    }
]

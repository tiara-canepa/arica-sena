interface Lesson {
    name: String,
    description: String,
    rating: Number,
    author: String,
}

export const lessons: Lesson[] = [
    {
        name: "Introducción a los Lenguajes de Señas",
        description: "Conoce la importania de aprender lenguajes de señas\
            y conoce el tuyo local.",
        rating: 5.0,
        author: "AricaSeña",
    },
    {
        name: "¡Hola Mundo!",
        description: "No siempre se saluda a distintas personas de la mimsa\
            manera. Aprende cómo decir \"Hola\" en contextos diferentes.",
        rating: 5.0,
        author: "AricaSeña",
    },
    {
        name: "¿Cómo se dice...?",
        description: "¡Aprende a aprender! Una de las mejores maneras de conocer\
            cómo comunicarse ocurre mientras lo haces, especialmente si la otra\
            persona está dispuesta a ayudarte.",
        rating: 5.0,
        author: "AricaSeña",
    }
]

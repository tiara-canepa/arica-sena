export const categorias: Categoria[] = [
    {
        nombre: 'Saludos Generales',
        nombre_corto: 'saludos',
        descripcion: 'Formas de saludar a las personas, ya sea a la distancia \
            o frente a frente.',
        icono: '👋',
    },
    {
        nombre: 'Primeros Auxilios',
        nombre_corto: 'auxilios',
        descripcion: 'Comunicar emergencias como incendios o estados de salud \
            para cuidar tu vida y la de los demás.',
        icono: '🏥',
    },
    {
        nombre: 'Comida',
        nombre_corto: 'comida',
        descripcion: 'Al salir a comer o en el supermercado. Distintos tipos \
            de comida para varias situaciones.',
        icono: '🍔',
    },
    {
        nombre: 'Servicios',
        nombre_corto: 'servicios',
        descripcion: 'Para comunicarse con vendedores o solicitar información.',
        icono: '🛍️'
    },
    {
        nombre: 'Frases Típicas',
        nombre_corto: 'frases',
        descripcion: 'Dichos o expresiones comúnmente usadas en la \
            comunicación del día a día.',
        icono: '🗨️',
    },
    {
        nombre: 'Palabras Comunes',
        nombre_corto: 'palabras',
        descripcion: 'Electrodomésticos, utensilios, herramientas o personas; \
            formas de referirse a las cosas que nos rodean.',
        icono: '🗣️'
    }
]

interface Categoria {
    nombre: string,
    nombre_corto: string,
    descripcion: string,
    icono: string,
}

export const categorias: Categoria[] = [
    {
        nombre: 'Saludos Generales',
        nombre_corto: 'saludos',
        descripcion: 'Formas de saludas a las personas, ya sea a la distancia \
            o frente a frente.',
    },
    {
        nombre: 'Primeros Auxilios',
        nombre_corto: 'auxilios',
        descripcion: 'Comunicar emergencias como incendios o estados de salud \
            para cuidar tu vida y la de los demás.'
    },
    {
        nombre: 'Comida',
        nombre_corto: 'comida',
        descripcion: 'Al salir a comer o en el supermercado. Distintos tipos \
            de comida para varias situaciones.'
    },
    {
        nombre: 'Servicios',
        nombre_corto: 'servicios',
        descripcion: 'Para comunicarse con vendedores o solicitar información.'
    },
    {
        nombre: 'Frases Típicas',
        nombre_corto: 'frases',
        descripcion: 'Dichos o expresiones comúnmente usadas en la \
            comunicación del día a día.'
    },
    {
        nombre: 'Palabras Comunes',
        nombre_corto: 'palabras',
        descripcion: 'Electrodomésticos, utensilios, herramientas o personas; \
            formas de referirse a las cosas que nos rodean.'
    }
]

interface Categoria {
    nombre: string,
    nombre_corto: string,
    descripcion: string,
}

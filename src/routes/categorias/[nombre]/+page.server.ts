import { categorias } from "../categorias";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    const categoria = categorias.find(cat => cat.nombre_corto === params.nombre);

    return {
        categoria: {
            nombre: categoria?.nombre,
            descripcion: categoria?.descripcion,
        },
    }
}

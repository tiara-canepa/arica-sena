import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (email === 'admin@admin.com' && password === 'admin') {
            redirect(301, '/');
        }
    },
    register: async (event) => {
        alert("Register");
    },
} satisfies Actions;

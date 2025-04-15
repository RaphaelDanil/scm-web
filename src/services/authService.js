import api from "../../public/appconfig";

export async function login(userName, password) {
    try {
        const urlUsuarios = "Auth/login"
        console.log("Enviando para login:", { userName, password });
        console.log(api.url + urlUsuarios)
        const response = await fetch(api.url + urlUsuarios, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });

        if (!response.ok) {
            return { success: false };
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error("Erro na API:", error);
        return { success: false };
    }
}

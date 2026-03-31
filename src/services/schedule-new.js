import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
    try {
        // requisição para enviar dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })
        // Exibe mensagem do successo do agendamento
        alert("Agendamento Realizado com Successo!")
    } catch (error) {
        console.log(error)
        alert("Noi foi possível agendar, tente novamente mais tarde.")
    }
}
import { hoursLoad } from "../form/hours-load"

// Seleciona input de data
const selectedDate = document.getElementById("date")

export function schedulesDays() {
    // Obtem data do input
    const date = selectedDate.value

    // Renderiza Horas disponíveis. 
    hoursLoad({ date })
}
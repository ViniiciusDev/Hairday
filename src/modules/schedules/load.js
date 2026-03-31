import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona input de data
const selectedDate = document.getElementById("date")

export async function schedulesDays() {
    // Obtem data do input
    const date = selectedDate.value
    //Buscar agendamentos na API
    const dailySchedules = await scheduleFetchByDay({ date })
    // Exibe os agendamentos
    schedulesShow({ dailySchedules })
    // Renderiza Horas disponíveis. 
    hoursLoad({ date })
}
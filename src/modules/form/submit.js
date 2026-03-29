import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Atual date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega data Atual e Data Mínima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()
    /* console.log("Enviado!!") */

    try {
        // Recuperando nome do cliente
        const name = clientName.value.trim()

        if (!name) {
            return alert("Informe nome do cliente!")
        }

        // Recuperando horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert("Selecione a Hora.")
        }

        // Recuperando somente a hora.
        const [hour] = hourSelected.innerText.split(":")

        // Inserir a hora na data.
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um id
        const id = new Date().getTime()

        console.log(
            id,
            name,
            when,
        )
    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}
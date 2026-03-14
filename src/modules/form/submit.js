import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Atual date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega data Atual e Data Mínima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Enviado!!")
}
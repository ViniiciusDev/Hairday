// Adicionar o evento de click somente para os horários disponíveis.
export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")
    /* console.log(hours) */

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            // Remove de todos os elementos (li) a classe hour-selected
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            // Adiciona a classe selected somente ao elemento (li) selecionado
            selected.target.classList.add("hour-selected")
        })
    })
}
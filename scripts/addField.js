// Procurar o botão
document.querySelector("#add-time")
    // Quando clicar no botão
    .addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    // pegar os campos.Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    fields[0].value = ""
    fields[1].value = ""

    // para cada campo, limpar..
    fields.forEach(function (field) {
        // pega o field do momento e limpa ele
        field.value = ""

    })



    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

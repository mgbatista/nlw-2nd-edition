// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
   // Duplicar os campos. Que campo?
   fields = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

       // Colocar na página: onde?
       document.querySelector('#schedule-items').appendChild(fields)
}
    
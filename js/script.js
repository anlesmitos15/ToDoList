function addwork() {
    // text-decoration-line-through
    let texto = document.getElementById("tarea").value
    let template = `    
    <div class="row">
        <div id="eliminate" class="input-group mb-3 mt-2">
            <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value=""
                aria-label="Checkbox for following text input" onchange="checkWork(event.target)">
            </div>
            <input type="text" value="${texto}" class="form-control"
            aria-label="Text input with checkbox">
        </div>
    </div>
    `
    texto == '' ? null : document.getElementById("tareas").innerHTML += template
    //document.getElementById("tareas").innerHTML+= template   
    // texto=''
    document.getElementById("tarea").value = ''


}
function checkWork(event) {
    // console.log(event.parentElement.parentElement.childNodes[3])
    let tachado = event.parentElement.parentElement.childNodes[3]
    tachado.classList.add("text-decoration-line-through")
}

function separartareas() {
    let separar = document.getElementById("tareasjuntas").value
    console.log(separar)
    let tareassep = separar.split(',')
    console.log(tareassep)
    for (let i = 0; i < tareassep.length; i++) {
        let template = `    
    <div class="row">
        <div class="input-group mb-3 mt-2">
            <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value=""
                aria-label="Checkbox for following text input" onchange="checkWork(event.target)">
            </div>
            <input type="text" value="${tareassep[i]}" class="form-control"
            aria-label="Text input with checkbox">
        </div>
    </div>
    `
        separar == '' ? null : document.getElementById("tareas").innerHTML += template
    }
}
function deleteWork() {
    let largo = document.getElementById('tareas').childNodes.length
    console.log(largo)
    for (let i = 5; i < largo; i++) {
        document.getElementById('tareas').childNodes[i].innerHTML = '';
        console.log(document.getElementById('tareas').childNodes[i].getAttribute())

    }

}
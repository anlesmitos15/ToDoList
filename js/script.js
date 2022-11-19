function addwork() {
    // text-decoration-line-through
    let texto=document.getElementById("tarea").value
    let template = `    
    <div class="row">
        <div class="input-group mb-3 mt-2">
            <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value=""
                aria-label="Checkbox for following text input" onchange="checkWork(event.target)">
            </div>
            <input type="text" value="${texto}" class="form-control"
            aria-label="Text input with checkbox">
        </div>
    </div>
    `
    document.getElementById("tareas").innerHTML+= template   
    // texto=''
    document.getElementById("tarea").value=''


}
function checkWork(event) {
    // console.log(event.parentElement.parentElement.childNodes[3])
    let tachado= event.parentElement.parentElement.childNodes[3] 
    tachado.classList.add("text-decoration-line-through")   
}
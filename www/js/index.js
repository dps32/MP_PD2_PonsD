$(document).ready( function ()  {

    $('#inputBtn').click(addElem);

});

function addElem() {
    const text = prompt("Nombre de la tarea:");
    if (text) {
        const elem = $(`<div class="task"><span>${text}</span><button>X</button></div>`);
        $('.tasklist .list').append(elem);
        $('button', elem).click(delElem);
    }
}

function delElem(e) {
    const eBtn = e.target ?? e.srcElement;
    const task = eBtn.parentElement;

    task.remove();
}
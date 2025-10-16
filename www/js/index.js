$(document).ready( function ()  {

    $('#inputBtn').click(addElem);

});

function addElem() {
    const text = prompt("Nombre de la tarea:");
    if (text) {
        const elem = $(`<div class="task"><span>${text}</span><button class="delBtn">X</button></div>`);
        $('.tasklist .list').append(elem);
        $('button', elem).click(delElem);
    }
}

function delElem(e) {
    const eBtn = e.target ?? e.srcElement;
    const task = eBtn.parentElement;

    task.classList.add('hidden');
    setTimeout(() => {
        task.remove();
    }, 300);
}
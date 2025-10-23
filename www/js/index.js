$(document).ready( function ()  {

    $('#inputBtn').click(addElem);


});

function addElem() {
    const text = prompt("Nombre de la tarea:");
    if (text) {
        const elem = $(`<div class="task hidden"><input class='taskText' value='${text}'/><div><button class="editBtn">Edit</button><button class="saveBtn">Save</button><button class="delBtn">X</button></div></div>`);
        $('.tasklist .list').append(elem);
        $('button.delBtn', elem).click(delElem);
        $('button.editBtn', elem).click(editElem);
        $('button.saveBtn', elem).click(saveElem);

        setTimeout(() => {
            elem.removeClass('hidden');
        }, 20);

    }


}

function delElem(e) {
    const eBtn = e.target ?? e.srcElement;
    const task = $(eBtn.parentElement.parentElement); // otra vez porque ahora esta dentro del contenedor de btns

    task.addClass('hidden');
    setTimeout(() => {
        task.remove();
    }, 300);
}

function editElem(e) {
    const eBtn = e.target ?? e.srcElement;
    const task = $(eBtn.parentElement.parentElement); // otra vez porque ahora esta dentro del contenedor de btns

    const taskText = $('.taskText', task);
    taskText.addClass('editable');
}

function saveElem(e) {
    const eBtn = e.target ?? e.srcElement;
    const task = $(eBtn.parentElement.parentElement); // otra vez porque ahora esta dentro del contenedor de btns

    const taskText = $('.taskText', task);
    taskText.removeClass('editable');
}
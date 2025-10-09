$(document).ready( function ()  {

    $('#inputBtn').click(addElem);


    function addElem() {
        const text = prompt("Nombre de la tarea:");
        $('.tasklist .list').append(`<div class="task">${text}</div>`);
    }

});

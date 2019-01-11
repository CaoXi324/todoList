document.getElementById('todo').onload = function () {
    showTodos('all');
    showTodoNum()
}
document.onkeyup = function (e) {
    var code = e.charCode || e.keyCode;
    if (code == 13) {
        saveTodo();
        showNewTodo();
        showTodoNum()
    }
}
document.getElementById('save').onclick = function () {
    saveTodo();
    showNewTodo();
    showTodoNum()
}
document.getElementById('all').onclick = function () {
    showTodos('all')
}
document.getElementById('completed').onclick = function () {
    showTodos('completed')
}
document.getElementById('active').onclick = function () {
    showTodos('active')
}
document.getElementById('clearCompleted').onclick = function () {
    clearCompleted()
}

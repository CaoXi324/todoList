
function saveTodo() {
    if (document.getElementById("input").value.length === 0) {
        return -1;
    }
    let todo = {
        content: document.getElementById("input").value.trim(),
        done: false,
        id: Date.now()
    };
    saveData(todo);
    document.getElementById("input").value = "";
}

function showNewTodo() {
    let todos = loadData();
    showLis(todos);
}

function showLis(todos) {
    let lis = createLiTag(todos);
    showLiTag(lis);
}

function createLiTag(todos) {
    return todos.map(ele =>
        `<li id=${ele.id} onclick="changeStatus(event)">${ele.content}<span onclick="deletodo(event)">&times</span></li>`
    );
}

function showLiTag(todos) {
    document.getElementById('todoList').innerHTML = todos.join('\n');
}

function showTodos(status) {
    let todos = loadData();
    document.getElementById('completed').style.backgroundColor = '';
    document.getElementById('active').style.backgroundColor = '';
    document.getElementById('all').style.backgroundColor = '';
    document.getElementById(`${status}`).style.backgroundColor = 'pink';
    switch (status) {
        case 'completed':
            todos = todos.filter(ele => ele.done === true);
            break;
        case 'active':
            todos = todos.filter(ele => ele.done === false);
            break;
    }
    showLis(todos);
}


function clearCompleted() {
    let todos = loadData();
    let undoList = todos.filter(ele => ele.done === false);
    saveActiveTodo(undoList);
    showLis(undoList);
    showTodoNum();
}

function showTodoNum() {
    let todos = loadData();
    document.getElementById('num').innerHTML = todos.length;
}


function deletodo(event) {
        let todos = loadData();
        let todoIndex = todos.findIndex(ele => ele.id === event.target.parentNode.id);
        todos.splice(todoIndex, 1);
        saveActiveTodo(todos);
        showLis(todos);
        showTodoNum();
    }


function changeStatus(event) {
    event.target.setAttribute("class", "deleLine");
    let todos = loadData();
    let activeTodos = [];
    console.log(event.target.id);
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == event.target.id) {
            todos[i].done = true;
        }
        activeTodos.push(todos[i]);
    }
    saveActiveTodo(activeTodos);
    showTodoNum();
}

var id = Date.now();
var isCompleted = false;
var todoList = [];


function saveItem() {
    addItem();
    showItem();
    showItemNum();
}

function addItem() {
    let obj_list = {
        todo: "",
        done: false,
        id: Date.now()
    };
    if (isCompleted) {
        obj_list.done = true;
    }
    if (document.getElementById("input").value.length === 0) {
        return -1;
    }

    obj_list.todo = document.getElementById("input").value.trim();
    todoList.push(obj_list);

    saveData(todoList);

    document.getElementById("input").value = "";

}

function showItem() {
    if (loadData().length > 1) {
        showItemNum();
    }
    let newAdd = loadData().length;
    if (isCompleted) {
        return -1;
    }
    var li = document.createElement('li');
    li.innerHTML = loadData()[newAdd - 1].todo;
    li.onclick = function () { changeStatus(li) };

    var span = document.createElement('span');
    span.innerHTML = '&times;';
    li.appendChild(span);
    document.getElementById('todoList').appendChild(li);

}
function changeColor(label) {
    label.setAttribute('class', 'style2');
}




function completed() {
    isCompleted = true;
    document.getElementById('completed').style.backgroundColor = 'pink';
    document.getElementById('all').style.backgroundColor = '';
    document.getElementById('active').style.backgroundColor = '';
}

function showAll() {
    document.getElementById('completed').style.backgroundColor = '';
    document.getElementById('all').style.backgroundColor = 'pink';
    document.getElementById('active').style.backgroundColor = '';
    clearAll();
    showTodoList(loadData());


}

function clearAll() {
    var allItems = document.getElementsByTagName('li');
    if (allItems.length > 0) {
        do {
            document.getElementById('todoList').removeChild(allItems[0]);
        }
        while (allItems.length > 0)
    }

}

function showTodoList(array) {
    for (let i = 0; i < array.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = array[i].todo;
        li.onclick = function () { changeStatus(li) };
        var span = document.createElement('span');
        span.innerHTML = '&times;';
        li.appendChild(span);
        document.getElementById('todoList').appendChild(li);
    }

}

function clearCompleted() {
    todoList = loadData().filter(item => item.done === false);
    localStorage.clear();
    saveData(todoList);
    showAll();
    showItemNum();
}


function showActive() {
    document.getElementById('completed').style.backgroundColor = '';
    document.getElementById('all').style.backgroundColor = '';
    document.getElementById('active').style.backgroundColor = 'pink';
    isCompleted = false;
    clearAll();
    activeTodoList = loadData().filter(ele => ele.done === false);
    showTodoList(activeTodoList);
}

function showItemNum() {
    document.getElementById('num').innerHTML = loadData().length;
}




document.getElementById('todoList').onclick = function (event) {
    if (event.target.nodeName === 'SPAN') {
        this.removeChild(event.target.parentNode);
        let indexOfItem = loadData().indexOf(ele => ele.todo === event.target.parentNode.innerHTML);
        loadData()[indexOfItem].done = true;
        saveData(loadData());

    }
}

function changeStatus(li) {
    li.setAttribute("id", "deleLine");
    let indexOfItem = loadData().indexOf(ele => ele.todo === li.innerHTML);
    loadData()[indexOfItem].done = true;
    saveData(loadData());
    showItemNum();
}

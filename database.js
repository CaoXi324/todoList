function saveData(todo) {
    let data = loadData();
    data.push(todo);
   return localStorage.setItem("mytodolist", JSON.stringify(data));   //JS对象转换成JSON对象存进本地缓存
}

function saveActiveTodo(todo) {
    return localStorage.setItem("mytodolist", JSON.stringify(todo));
}

function loadData() {
    var todos = localStorage.getItem("mytodolist");
    if(todos !=null){
        return JSON.parse(todos);     //JSON对象转换为JS对象
    }
    else { return []; }
}


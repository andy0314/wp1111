import React, {Component} from 'react'

document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let itemName = document.getElementsByClassName("todo-app__input")[0].value;
        if(itemName !== ""){
            AddNewTodo(itemName);
            document.getElementsByClassName("todo-app__input")[0].value = "";
        }
    }
})

var totalTodo = 0;
var uncompleted = 0;

var AddNewTodo = function(i){
    console.log(totalTodo);
    let newTodo = document.createElement("li");
    newTodo.className = "todo-app__item";
    let checkBox = document.createElement("div");
    checkBox.className = "todo-app__checkbox"
    let inputBox = document.createElement("input");
    inputBox.id = totalTodo;
    inputBox.type = "checkBox";
    var todoId = totalTodo;
    inputBox.onclick = function(){clickButton(todoId);};
    let checkLabel = document.createElement("label");
    checkLabel.htmlFor = totalTodo;
    let content = document.createElement("h1");
    content.classList = "todo-app__item-detail";
    content.innerText = i;
    var todoList = document.getElementById("todo-list");
    checkBox.appendChild(inputBox);
    checkBox.appendChild(checkLabel);
    newTodo.appendChild(checkBox);
    newTodo.appendChild(content);
    todoList.appendChild(newTodo);
    totalTodo++;
    uncompleted++;
    if(totalTodo !== 0){
        document.getElementById("todo-footer").style = "display: flex;"
    }
    document.getElementsByClassName("todo-app__total")[0].innerText = "" + uncompleted + " left";
}

var clickButton = function(id){
    console.log("click");
    console.log(id);
    let content = document.getElementsByClassName("todo-app__item-detail")[id];
    let box = content.parentElement.getElementsByTagName("input")[0];
    if(box.checked === true){
        console.log("del");
        uncompleted--;
        content.style = "text-decoration: line-through; opacity: 0.5;";
    }
    else{
        console.log("add");
        uncompleted++;
        content.style = "";
    }
    document.getElementsByClassName("todo-app__total")[0].innerText = "" + uncompleted + " left";
}
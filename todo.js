
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

/* 유튜브 영상에 id는 +1로 추가했으나, 
삭제 도중 다시 생성 시 중복될 가능성이 있어 id를 시간으로 생성 */
function getId(){
    const date = new Date();
    const getTime = date.getTime();
    return getTime;
}

function paintTodDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    // const newId = toDos.length + 1;
    const newId =  getId();
    const toDoObj = {
        text: text,
        id: newId
    };

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);


    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    toDos.push(toDoObj);
    saveToDos();
}

function toDohandleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedDos = localStorage.getItem(TODOS_LS);
    if(loadedDos !== null){       
        const parsedToDos = JSON.parse(loadedDos);
        parsedToDos.forEach(function (toDo){
            paintTodDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", toDohandleSubmit);
}

init();
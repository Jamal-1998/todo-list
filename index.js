let inputtext = document.getElementById('inputtext');
let button = document.getElementById('add');
let todolist = document.getElementById('todolist');

inputtext.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        add();
    }
});

button.addEventListener("click", add);

function add() {
    let inputvalue = inputtext.value.trim();
    console.log(inputvalue);
    if (inputvalue === '') {
        alert("Enter the text");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputvalue;
        todolist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span);
        savedata()
    }
    inputtext.value = "";
}

todolist.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("linethrough");
        savedata()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata()
    }
});

function savedata(){
    localStorage.setItem("data",todolist.innerHTML);
}
function showdata(){
    todolist.innerHTML=localStorage.getItem("data");
}
showdata()

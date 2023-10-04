// const inputbox = document.getElementById("input-box");
// const inputbox = document.getElementById("input-box");

// const listcontainer= document.getElementById("tasks");

// function addtask(){
//     if(inputbox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li= document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//         inputbox.value = ''; // Clear the input box after adding a task
//        let span = document.createElement("span");
//        span.innerHTML ="\u00d7";
//        li.appendChild(span);

//     }
// }
// listContainer.addElementListener("click", function(e){
//     if(e.traget.tagName === "LI"){
//         e.target.classList.toggle("checked");
// }
// else if(e.target.tagName === "SPAN"){
//     e.target.parentElement.remove();
// }

// },false);
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("tasks");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
     // Clear the input box after adding a task
     saveData(); 
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
   
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML =localStorage.getItem("data");
}
showTask();
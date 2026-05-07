let countEL = document.getElementById("counter")
let saveEL = document.getElementById("save-el")

let count = 0;

function initialize(){
    count = 0;
    countEL.textContent = count;
}

function increment(){
    count++;    
    countEL.textContent = count;
}

function decrement(){
    count--;    
    countEL.textContent = count;
}

function save(){
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    initialize();
}
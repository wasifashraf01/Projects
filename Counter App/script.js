let count = document.querySelector("#count");
let plus = document.querySelector("#add");
let minus = document.querySelector("#sub");
let clear = document.querySelector("#reset");
let inputNums = document.querySelector("#nums");


function add() {
     let countValue = parseInt(count.innerText);
     let number = parseInt(inputNums.value);
     // console.log(number);
     count.innerText = countValue+number;
     // console.log("Add Clicked", countValue);
}
plus.addEventListener("click", add);

function sub() {
     let countValue = parseInt(count.innerText);
     let number = parseInt(inputNums.value);
     // console.log(number);
     count.innerText = countValue-number;
     // console.log("Sub Clicked", countValue);
}
minus.addEventListener("click", sub);

function reset(){
     count.innerText = "0";
}
clear.addEventListener("click", reset);


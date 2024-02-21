/* 

let button = document.createElement("button");
let div = document.getElementById('div')
button.style.padding= "15px";
button.innerText = "Click Me to create Li"
div.appendChild(button)
button.setAttribute("onclick","createLi()")

let lang = document.querySelector('.language')
console.log(lang);
let newLi = document.createElement("li");
console.log(newLi);
newLi.innerText = "Java";
console.log(newLi);
lang.appendChild(newLi);

let input= document.querySelector('input');
console.log(input)

function createLi(){
    if(input.value!= ""){
let newList = document.createElement('li');
newList.innerText=input.value;
lang.appendChild(newList)
}
else{alert(`Please enter the Li in the input`)}
}

let clearBtn = document.createElement("button");

const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    console.log(newli);
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    console.log(newLi);
    console.log(newLi.parentNode)

    let body = document.querySelector('body')
    console.log(body.parentElement)

    let languageClass = document.getElementsByClassName('language');
    newLi = document.createElement('li');
    newLi.innerText = 'Script';
    languageClass[0].appendChild(newLi);
    console.log(languageClass)





let hafsa = "Hafsa bint e Hassan";
console.log(hafsa.length);
let array = [];
for(let i = 0; i<hafsa.length;i++){
    console.log(hafsa[i]);
    array.push(hafsa[i]);
    
}
console.log(array);


let arrayToString = array.toString();
console.log(arrayToString.replace(",",""));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruitString = fruits.toString();
// console.log(fruitString)

// console.log(fruitString.replace(","," "))

// let fruitStringAll = fruitString.replaceAll(',',' ')
// console.log(fruitStringAll);

console.log(fruits.toString().replaceAll(",", ' '));
console.log(fruits)

const gameName = new String('hitesh-hc-com');
let gameName1 = 'hitesh-hc-com';

console.log(typeof gameName, gameName.length,gameName, "New String");
console.log(typeof gameName1, gameName1, "Regular String");

// ++++ Using .at(index numbr to enter) +++ this works over strings and array let's check.+++++++++++++++++++++++++++++++++

let variable1 = 'The quick brown fox jumps over the lazy dog.';
let variable1Array = variable1.split(' ');
let variable1Object ={
    firstName:"Sharjeel",
    lastName : "Hassan",
    fatherName:"Sohail",
    mobileNumb: 3332775660,
    email:"mohamm@gmail.com",
    location:"karachi",

}


console.log(variable1.at(5));
console.log(variable1Array.at(5));
// console.log(variable1Object.at(+5));//There is no index to call


console.log(variable1Object)
console.log(variable1);
console.log(variable1Array);

//++++++++Using .charAt(index number to enter)++++++++ Works only with Strings++++++++++++++++++++++++++++++++++++++++++++


console.log(variable1.charAt(5));
// console.log(variable1Array.charAt(5));// Does not work with Arrays
// console.log(variable1Object.charAt(+5));/There is no index to call


//+++++++++++++++ Using .concat() this concatenates the strings and array into one. and returns a new value.

let concat = variable1.concat(gameName1);
console.log(concat);
let array1 = [1,2,3,4];
let array2  = ['a','ad']
let concat1 = array1.concat(array2);
console.log(concat1);

let sy = Symbol(12)
let ju = {
    [sy]:"fu"
}
console.log(ju[sy]);


// ++++++++++++++++++ Some of the DOM methods++++++++++++++++++++++++++++++++++++++++ https://www.youtube.com/watch?v=geprtDTW-TU

// const newLi = document.getElementsByClassName('fruit');
// const newLi = document.getElementById('fruit');
// console.log(newLi.innerText)
// const newLi = document.getElementById('banana');
// textNewLi = document.createTextNode('Grape');
// newLi.appendChild(textNewLi);
// console.log(newLi)

const fruit = document.getElementById("fruit")
// const banana = document.getElementById('banana');
const newLi = document.createElement('li');
newLi.innerText = "Grapes";
// banana.appendChild(newLi)
// fruit.appendChild(newLi)

const fruitClass = document.getElementsByClassName('fruits');
console.log(fruitClass[1])
// fruitClass.appendChild(newLi);




*/


// ++++++++++++++++ TO DO App-++++++++++++++++++++++++++++++++++++
let input = document.getElementById('input');
let taskBtn = document.getElementById('taskBtn');
let delAllBtn = document.getElementById('delAllBtn');
let listDiv = document.getElementById('listDiv');


function addTask(){
    let taskDiv = document.createElement('div');
    listDiv.appendChild(taskDiv);
    let taskDivP = document.createElement('p');
    taskDivPContent = document.createTextNode(input.value);
taskDivP.appendChild(taskDivPContent);
taskDiv.appendChild(taskDivP);

let editBtn = document.createElement('button');
let editBtnText=document.createTextNode('Edit Task');
editBtn.setAttribute('onclick','edit()');
editBtn.appendChild(editBtnText);
 
 taskDiv.appendChild(editBtn);

 let delTaskBtn = document.createElement('button');

let delTakBtnText = document.createTextNode('Delete Task');
delTaskBtn.appendChild(delTakBtnText);
delTaskBtn.setAttribute('onclick','delTask(this)');
taskDiv.appendChild(delTaskBtn);

}

function delAll(){
    listDiv.remove();
    input.value ="";
}

function edit(){

    let promptEdit = prompt("enter")
}



function delTask(del){
// let abc = console.log(del)
let abc = del.parentElement;
console.log(abc)
abc.remove();


}
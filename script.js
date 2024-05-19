/////////// basics /////////////
// js the language
// basics

// --- inbuilt features ---
// console 
// console.log("vikas");
// console.warn("vikas");
// console.error("vikas");

// alert
// alert("hey");

// prompt
// let input = prompt("hello");
// console.log(input);

// window

// ------ data types -----
// var a = 12;
// var a = 12.4;
// var a = true;
// var a = [];
// var a = false;
// var a = null;
// var a = undefined;
// var a = function(){};

// ----- spread -----
// var ar = [12, 23, 45, 62];
// var gh = [...ar];
// console.log(ar);

// -------- conditionals -----------
// var age = 18;
// if (age>18) {
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// truthy falsy
// null undefined NaN 0 "" '' document.all false  
// baki sab truthy

// ------ loops -----------
// for(start; end; change){
// }

// 1- 10
// for(let i=1; i<11; i++){
//     console.log(i);
// }

// 20 - 5
// for(let i=20; i>4; i--){
//     console.log(i); 
// }

// while
// start 
// while(end){
//     change 
// }

// var i = 1;
// while (i<11) {
//     console.log(i);
//     i++;
// }

// --------- functions ---------
// function abcd(){
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     console.log("d");
// }
// abcd();
// abcd();

// return :
// var abcd = ()=>"vikas";
// var ans = abcd();

// function abcd(){
//     return 12;
// }
// console.log(abcd());

// function abcd(){}
// console.log(abcd()); //return undefined


// --------- arrays ------------
var users = ["vikas", "krishnkant", "saqib", "shivam", "vishakha", "nitika"];
// console.log(users[2]);

// how 
// var arr = [1, 2, "3", function abc(){}, [], 4];
// console.log(arr[3]);

// users.forEach(function(val){
//     console.log(val);
// })

// ------- objects ----------
// var obj = {};
// var obj2 = {
//     name: "vikas",
//     age: 23,
//     email: "vk@gmail.com",
//     contact: 9876543210
// }
// console.log(obj2.name);

//////////////////////////////////////////////////////////////////////

// --------- shynchronous ashynchronous js ----------
// synchronous code mein code line by line chalta hai 
// async code line by line nahi chalta, saara async code ek saath shuru kar diya jaata hai and jo pahle complete hojaaye uska answer dediya jaata hai



// es6 climax

// Questions
// miscellaneous - switch case and ternary do-while forin forof

// interview prep 
// ---------- this call apply bind ------------
// ------ this ---------- 
// global - window 
// console.log(this);

// function - window
// function abcd(){
//     console.log(this);
// }

// // method - object
// var obj = {
//     name: function(){
//         console.log(this);
//     }
// }
// obj.name();

// fnc inside method (es5) - window
var obj2 = {
    sayName: function(){
        console.log(this);
        function childfnc(){
            console.log(this);
        }
        childfnc();
    }
}
// obj2.sayName();

// fnc inside method (es6) - window
var obj3 = {
    sayName: function(){
        const child = () => {
            console.log(this);
        }
        child();
    }
}
// obj3.sayName();

// constructor fnc mein this ki value - new blank object
// function add(){
//     console.log(this);
// }
// const ans = new add();

// event listener mein this ki value - that element jisper event lis. laga ho 
// document.querySelector("button").addEventListener("click", function(){
//     console.log(this);
// })

// call:
// const obj = {name: "vikas"}
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);

// apply:
// const obj = {name: "myname"}
// function abcd(){
//     console.log(this);
// }
// const baadmechalaanekeliyefnc = abcd.bind(obj);
// baadmechalaanekeliyefnc();


// --------- prototypes ----------
// --------- protypal inheritance ----------
function makeHuman(name, age){
    this.name = name,
    this.age = age;
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}
// let human1 = new makeHuman("vikas",23);
// let human2 = new makeHuman("krishnkant",24);

// --------------- closures -----------------
// function abcd(){
//     var a = 12;
//     return function(){
//         console.log(a);
//     }
// }
// var ans = abcd();
// ans(); 

// exapmle 2: 
function timer(){
    var a = 15;
    return setTimeout(function(){
        console.log(a);
    }, 2000)
}
// var ans = timer();

// ---------------- event delegation --------------------

var parent = document.getElementById("parent");

parent.addEventListener("click", function(details){
    if(details.target.id === "play"){
        console.log("play song");
    }
    else if(details.target.id === "pause"){
        console.log("pause song");
    }
})

// ---------------- hofs higher order functions ----------------
var arr = [1,2,5,3,7];

arr.forEach(function(){}) //forEach hof hai

// --------- error handling - try catch -------------

function divide(a, b){
    try{
        if(b === 0){
            throw Error("kuch to gadbad hai");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
// divide(12,0);

// ----- events, click, dblclick, mouseover, input -----
// custom event

// const yourevent = new Event("gharjaao");
// document.querySelector("#btnghar")
// .addEventListener("gharjaao", function(){
//     alert("jaa raha hu");
// })
// document.querySelector("#btnghar").dispatchEvent(yourevent);
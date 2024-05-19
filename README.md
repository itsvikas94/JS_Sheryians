=> ----- basics----
=> js the language
=> basics
=> inbuilt features
=> variable constants
=> compilers and interpreters
=> window
=> types
=> conditionals
=> loops
=> functions
=> arrays
=> objects
=> --------
=> prototypes
=> protypal inheritance
=> ashynchronous
=> es6 climax
=> questions

js = language
js the language= code likhna seekhna, main features
js the dom = code likhkar cheejein banana seekhna 
managed by ecmascript(ek community hai) - naye features lana, purane features hatana, kharaab features sahi karna and overall development of js 

two parts of js
1. es5  eg. var
2. es6  eg. let

=> --- variable constants ---
=> har programming lang mein data se deal karna hota hai, wo alag alag prakar ka data ho sakta hai, ab aisa data jismein deal karna hai, wo save to krna padega na, to wo data save karne ke liye hume koi saving space chahiye jaha par data save ho jaaye and ye save krne ke liye unhe kuchh naam bhi dena padega and isliye humein variables and constants banaane padte hai taaki data save hojaae and unka koi naam bhi ho taaki hum baad mein unhe access kar payein

=> variables and constant hote hai data store krne ke liye and vaiable mein data store hai and change bhi ho jaata hai and constants mein data store and nahi hota and dono hi brower par memory lete hai and brower RAM par chalta hai to technically dono RAM par chalte hai ya fir space lete hai

=> --- compilers and interpreters ---
=> js language english words use krti hai and computers english nahi samjhte, wo samajhte hai 0 and 1 jisko current flow and current bypass bhi kah skte ho, and hum chaahte hai hum english mein likhke comp se baat krlr, to hum ek translater lagaayenge jo ki humara code english mein lega and use 0 and 1 mein convert kr dega

=> compiler and interpreter translators hai jo ki english code ko convert kr rhe hai machine code mein

=> java = compiler
=> jit compiler - interpreter ki shuraati taakat use krta hai and compiler ki running taakat use karta hai


console alert prompt

=> ------data types -----
=> types matlab data ka roop
=> vikas - string 
=> 12 - integer
=> 12.3 - float
=> true - boolean
=> a - character

=> types = primitive dt || reference dt
=> 12, 12.4, vikas, true, a, null, undefined
=> [] () {} - reference dt

------- conditionals ---------
if else else-if ternary operator switch case
jab bhi aapko program mein decision lena hota ho, ki aage ka execution kaisa ho to waha par if else else-if use hota hai 

--------- truthy and falsy values -----------
har value ko true ya false banaya jaa skta hai, ye depend karta hai, ki wo value ka type kya hai, ye wo value, truthy hai to true banegi and falsy hai to false banegi

--------------- loop -------------
loops = repeat
for(70%), while, do-while, foreach(25%), forin, forof

foreach - ye ek normal loop nahi hai for and while ki tarah jo bhi numbers pe ya start end par chalta hai, foreach loop sirf array pe chalta hai 

--------------functions-----------
es5 and es6
es5 - 1. function statements
      2.function expressions 
      3. anonymous function
es6 - fat arrow function
    (a) basic fat arrow
    (b) fat arrow with one param
    (c) fat arrow with implicit return

js mein function normal programming language jaise nahi hai, iska matlab hai, yaha par js mein, function banaane ke liye type nahi batana padta bas aapko function word likhna padega and aap usey koi naam deke bana skte ho

indepth - js mein function first class functions ka darja diya gaya hai, jiska matlab hai, ki js mein functions ko value/variable ki tarah treat kiya ja skta hai

what is function?
koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant na chalana ho par kabhi chalana ho, usey function mein daal skte hai

why we need
to reuse code and to wrap th code which we want to run in future at some point of time

how to use 
function abc(){ your code }

extras we should know
parameters and arguments
    function abc(val){  => val is parameter

    }
    abc(12);  => 12 is arguments

prep for interview
function abcd(){
    => function statement
}

var abcd = function(){
    => function expression
}

function(){
    => anonymous function
}

fat arrow
var a = ()=>{};

var b = ()=>{

}

var g = ab =>{}

g(12)

return 
return ka matlab hua, jaha parbhi return lagega uske aage jo bhi likhoge wo jaayega jaha par function call hua tha, return functions ke andar lagta hai

aisa function jo kuch bhi return nahi karta wo bhi undefined return krta hai

-------- undefined  null not defined-------
=> undefined is a value
ye value tab di jaati hai jab variable ko koi value naa mili ho, iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, aap isey default value bhi kah skte ho

=> not defined is an error
koi particular element/identity ko use karna without it's declaration gives an error, and that error is not defined error

=> null is also a value
this is a value which resolve like, not found 
null is recieved when something is not found

----- array -------
what 
array matlab jab bhi aapko ek ya ek se jaada value ek saath rakhni ho

why
a lot if time the data is the hape of more than one member, to contain all data altogether, we can save it in an array

var arr = [1,2,3,4];

add all members of array
count all members

how to loop an array
how  to loop an array and do something with each element
arr.foreach(function(val){
    console.log(val);
})

----------objects----------
what 
object ek tareeka hai jisse ki hum ek identity ki details ko ek saath rakh skte hai 

=> ---------- this call apply bind ------------
=> this 
=> this keyword js mein one of the most suspenseful keyword
=> keyword ka matlab hota hai aisa word jiska koi matlab ho programming language mein
=> this ki value baar baar badal sakti hai alag alag condition mein, saari conditions ko seekh jaao to this ko samajh jaaoge

=> global - window 
=> function - window
=> method - object
=> fnc inside method (es5) - window
=> constructor fnc mein this ki value - new blank object
=> event listener mein this ki value - that element jisper event lis. laga ho 

=> ------------ call apply bind -------------
=> ye teen tareeke hai function ko call karne ke kisi object ko this maan kar 

=> --------- prototypal inheritance ----------
hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuch add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein.

aisa koi bhi function jismein aap this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyog karein, to new ka matlab waha par ek blank object hojaata hai 

ek function jo ki this ka upyog kar raha ho and new ke dwaara naye objects bana kar deta ho aise function ko constructor function kahte hai  

------------------- closures ------------------
aisa koi bhi function jo ek aur function ko return karde usey closure kahte hai

=> ---------------- event delegation --------------------
- jab aap event listener se kai saare different elements ko handle ka sake
- event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karao

=> ---------------- hofs higher order functions ----------------
aisa koi fnc jo ki ek fnc ko parameter mein accept karle and/or ek function ko return karde 

------------ error handling - try catch ------------------


//alert("welcome to js")
/*

console.log("satheesh");
console.log("223343");
console.log("22.33");
console.log("true");
console.log([38,89,9,99]);
console.log({fname: "satheesh", age: 22});
console.table({fname: "satheesh", age: 22});
console.error("coutom ERROR");
console.warn("one time to use");
//console.clear();
console.time("timer");
for(i=0;i<10;i++)
{
    console.log(i)
}
console.timeEnd("timer");

/*
var
let
const

var a =32
var b = 18
console.log(a+b)

// rule 1.scope   var use all side , let,conts used one side
if (true)
{ //var mgs="welcome js ";
  //let mgs ="welcome js";  
  const mgs ="welcome ms js";  
console.log(mgs); 
}
//console.log(mgs);

//2.variable redeclaration same key not allow by let ,const
var a = 28;
console.log(a);
//let a=28
//console.log(a)
//const a = 28
//console.log(a)
// 3 value assignment
var a= 26;
console.log(a)
 a=10;
console.log(a)

let s= 16;
console.log(s);
 s=12;
console.log(s);


const a = 23
console.log(a)
a = 43
console.log(a)
*/
const student = { "name": "sath", "age": 22};
console.table(student);
console.log(student.name);
student.name= "eesh"
console.table(student)


// data types
// js is dynamic lang
/* number = 11 1.0 
boolean = T F
null = 0
symbol 


ARRAYS
OBJECTS
DATE
*/
//number

var b=2.0;
var a= 29;
console.log(typeof a);
console.log(typeof b);

let c;
console.log(typeof c);
//symbol

const s1 = Symbol();
const s2 = Symbol();
console.log(s1==s2); 


var d =  new Date();
console.log(d);

//type conversion
let q;
q = 20;
console.log(q, typeof q);
q = String(q);
console.log(q, typeof q);

q = 2.20;
console.log(q, typeof q);
q = String(q);
console.log(q, typeof q);

q = 2.20;
console.log(q, typeof q);
q = Boolean(q);
console.log(q, typeof q);

q =new Date();
console.log(q, typeof q);
q = Boolean(q);
console.log(q, typeof q);

// string to number
m = "123";
console.log(m, typeof m);
m=Number(m);
console.log(m , typeof m);

m = true;
console.log(m, typeof m);
m=Number(m);
console.log(m , typeof m);

m =[1,2,3];
console.log(m, typeof m);
m=Number(m);
console.log(m , typeof m);


m ="sath";
console.log(m, typeof m);
m=Number(m);
console.log(m , typeof m); // NaN not a number

// type coercion

let n = "23";
let n1 = 17;
console.log(n+n1)
n=Number(n);
console.log(n+n1)

// arithmetic operation  +, -, % , * ,/

let n2 = 100;
let n3 = 200;
let n4 ;
n4 = n2+n3;
n4 = n2-n3;
n4 = n2/n3;
n4 = n2%n3;
n4 = n2*n3;
n4 = 2**3;
n4 = --n3;
n4 = ++n2;
console.log(n4);

//ass operators

let m1 = 100;
//m1= m1+20;

m1 +=40;
m1 -=40;
m1 /=40;
m1 %=20;
m1 *=200;
console.log(m1);

// maths fun

let v;
v = Math.E;
v = Math.round(2.6);//full number +
v = Math.round(2.3); //full num -
v = Math.floor(2.6);//single num 3.9 = 3
v = Math.sqrt(20);//square route
v = Math.ceil(2.2);// 3.2 = 4 ,2.9 = 3
v = Math.abs(-26);// positive num
v = Math.trunc(2.69);// 2
v = Math.pow(2,4);//2*2*2*2
v = Math.min(2,6,0,8);// minimum value
v = Math.max(2,6,9);// maxium num
v = Math.random();// new num
v = Math.floor((Math.random()*10+1));//1-10 random 
v = Math.sign(-2);//  1 = 1, -3 = -1 , 0 = 0
console.log(v)

// comparison operators

let n5 =10;
let n6 = '10';
console.log(n5==n6);// only num = true
console.log(n5===n6);// num + data type = false

//relational op js

/* 
> greater than
<less than
>=greater than or equal to
<= less than or equal to
*/

let n7 = 10;
let n8= 20;
console.log("greater: ", n7>n8)
console.log("lesser: ", n7<n8)
console.log("greater than equal: ", n7>=n8)
console.log("lesser than equal: ", n7<=n8)

//logical op js
/*
logical and &&
logical or ||
logical not !
*/

let mark = 38
console.log(mark>=35 && mark<=100)





































































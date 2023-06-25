
//comment single line
/*multi line comment
alert("hello ssatheesh");

alert(20*2*2)

console.log("iam satheesh");
alert(" hello i am satheesh");
var mgs=" hello i am satheesh";



// js object{}
let person={
    name : "satheesh",
    age :  22,
    gender: "male",
    dod:"25-11-2001",
    isalive : true,
    sibling: {
        sis:"sara",
        bro:"dheena"
    }
}
console.log(person.sibling)

//arrays[]

let favfruits= ["apple","orange","mango"]


favfruits[4] ="lemon"
favfruits[3]=2
console.log(favfruits.length)

//function
function add(firstname, secondname,){
    //let name = "satheesh";
    let mgs ="i am " + firstname +""+secondname+ " i was learning java script";


console.log(mgs)
}
add("hindu","mus") 
add("ando","r15")
add("satheesh","kumar")

//js operators

//assignment operators
let x =20;
x +=1
x -=10
x *= 1
x %=10

console.log(x)

//arithmatic operators

let number1=20;
let number2=5;

console.log(number1+number2)
console.log(number1-number2)
console.log(number1*number2)
console.log(number1/number2)
console.log(number1%number2)
console.log(number1**number2)

//increment(++)
console.log(++number1)
//decrement(++)
console.log(--number1)

//comparision operators
 
let x = 1;
console.log(x > 2);

console.log(x == 1); //equal
console.log(x >3); // greater
console.log(x <= 1); //less
console.log(x === 4); // equal
console.log(x !== 1); // not equal

//string operators
console.log("sath">"sara");
console.log(true == 1);// 1 = true, 0 = false

// strict equality operators (datatype + value)
console.log(1 === 1)// number=== number = true
console.log("1" === 1)//string=== number = false

// lose equality operators()
console.log(1 == 1)//Number==Number =true
console.log("1" == 1)//string == number = true
console.log(true == 1)


//ternary operators
let age= 18

let type= age > 18 ? "adult ticket": "child ticket"

console.log(type)

// logical opertors


//logical AND (&&)
//both are same 
console.log(true && true);

//logical OR(||)
// any one are true 
console.log(true || false);

//NOT(!)
//oposite 
console.log(true);
console.log(false);

let police= true;
let criminal= true;
let judge= police && criminal
let court= judge
console.log("case :" + judge )
console.log("court result:"+ court) 

//logical operators with non boolean
// deep lg
// falsy (false)
//undefined
//null
//0
//false
//'';""
//NaN
let usercolor="red";
let defaultcolor="blue";
let usingcolor= usercolor||defaultcolor;

console.log("usingcolor: "  +  usercolor)
*/
//bitwise operators
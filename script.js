// function hello (){
//     console.log ("hello");
// }
// setTimeout(hello,2000)//2000 = 2 second
// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello");
// }, 2000); // 4000 = 4 second
// console.log("three");
// console.log("four");
// let age = 18;
// if(age >= 18){
//     if(age >= 21){
//         console.log("aged");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }
// function sub(a, b) {
//     return a - b;
// }
// function calculate(a, b, callback) {
//     return callback(a, b);
// }
//     calculate(3, 2, sub);
//     console.log(calculate(3, 2, sub));
// let a = prompt("enter first number");
// let b = prompt("enter second number");
// let c = prompt("what operation you want to perform write + for addition, - for subtraction");
// console.log("your answer is " + (c === "+" ? (parseInt(a) + parseInt(b)) : (parseInt(a) - parseInt(b))));

//nesting loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i + " " + j);
    }
}
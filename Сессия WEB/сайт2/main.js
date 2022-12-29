// let name = "Zhasmin"
//     age = 18,
//     balance = 18.5,
//     test = false,
//     x = 10,
//     y = 5,

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x % y);
// console.log(x / y);
// console.log(x ** y);

// console.log(5 == "5"); //true
// console.log(5 === 5); //false
// console.log(5 < 4);
// console.log(5 <= 5);
// console.log(5 != 5);


// let age = 18;
// if (age >= 18 || age < 60) {
//     console.log("Вы прошли")
// } else {
//     console.log("Вы не прошли")
// }

// let x = 5;

// if (x == 4){
//     console.log("x = 4")
// } else if(x == 3) {
//     console.log("x = 3")
// } else {
//     console.log("Ни одно условие не сработало")
// }


// let z = 5;
//     x = 33;
//     y = 59;

// if (z > x || z > y){
//     console.log("z = 5")
// } else if(y > z || z > x){
//     console.log("y = 59")
// } else if(x > y || x > z){
//     console.log("x = 33")
// } 


var result = prompt('Ваше имя', '');
if (3 > result.length){
    alert('Вы некорректно ввели имя, попробуйте еще раз');
} else if(result.length >= 3) {
    alert('Вас зовут ' + result + '!');
}




const age = prompt('Ваш возраст', '');
if (age >= 14 & age < 60){
    alert('Вам ' + age + ' лет.');
} else if(age < 14) {
    alert ('Вы должны быть старше 14 лет, попробуйте еще раз.');
}

studalert();

function studalert(){
    var stud = confirm('Вы студент?', '');
if (stud == true){
    alert('Вы студент');
} else if(stud == false) {
    studalert();
}}

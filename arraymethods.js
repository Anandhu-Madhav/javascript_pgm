
//for each,map,filter

//for each
let students =["Annu","manu","ananthu","sheena","kuunnu"];

students.forEach(function(name){
    console.log(name);
});


//map

/*let numbers =[10,20,30,40];
let result = numbers.map(function(num){
return num*2;

}
)
console.log(result);*/


/*let name1 = ["Apple","mango","orange"];

let boys=name1.map(function(name1){
    return name1.toUppercase();


})
console.log(boys);*/

/*let numbers1 =[10,20,30,40];

let digit = numbers1.filter(function(num)
{
    return num>20;
})

console.log(digit);*/


let numbers2 =[10,20,30,40];

let digits = numbers2.filter(function(digit)
{
    return digit % 2===0;
})

console.log(digits);
/*let numbers =[10,20,30,40];
console.log("first element", numbers[0]);
console.log("last element", numbers[numbers.length-1]);


let marks =[10,20,30,40];

marks[2]=100;
console.log(marks);


//for in loop

let fruits = ["Apple","mango","orange","Annu"];

for (let index in fruits){
    console.log(index);
}

let students =["Annu","manu","ananthu","sheena","kuunnu"];

for(let index in students){
    console.log(index,students[index]);
}*/


/*let mark1=[10,20,30,40,50];

let total=0;

for(let index in mark1){
   total = total + mark1[index];
}
console.log(total);*/


// for of loop

let fruits = ["Apple","mango","orange"];

for (let fruit of fruits){
    console.log(fruit);

}

let numbers =[10,20,30,40];
for (let even of numbers){

    if (even%2===0)
    {
         console.log(even);
    }
}
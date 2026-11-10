//global scope - call evideyum cheyyam , outside insde the pgm or function


/*let name = "Annu";
function displayname(){
    console.log(name);

}displayname()
console.log(name);*/

//functyions scope - only call inside the function

/*function showdetails(){
    let name = "Annu";
    let age = 20;
    console.log(name);
    console.log(age);

}showdetails();*/


//block scope - only access inside blocks

if (true){
    let age = 25;
    const name ="Annu";
    var city ="kochi";
    console.log(age);
    console.log(name);
    console.log(city);
}

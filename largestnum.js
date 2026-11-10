function findlarge(a,b,c){
    if (a > b && a > c){
        console.log("A is large");
    }
else if(b > c && b > a){
        console.log("B is large");
    }
    else{
        console.log("C is large");
    }
}
findlarge(10,2,4);


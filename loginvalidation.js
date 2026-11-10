function login(username,password){
    if(username === "admin" && password === "123"){
        console.log("login successfull");

    }

    else{
        console.log("invalid login");

    }
}
login("admin","123");
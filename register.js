console.log("Helo World.", 43,409,23, true ,false ["banana", 43, true]);

console.log(typeof("Hello World."),typeof(34234),typeof (["banana"]))

// string = kahit anong word, asd ,asdsadas ,234

//numer = 12345, 40.2, 60.4
//bollean = true , false
// object == array []

let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPasswword");
let txtConfirmPasswod = document.querySelector("#txtConfirmPasswword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function(){
    register(txtUsername, txtPassword, txtConfirmPasswod, txtAge.value);
}

function register (username, password, confirmpassword, age) {
    console.log(username, password, confirmpassword, age);
    // alert("Register button has been clicked")  
}
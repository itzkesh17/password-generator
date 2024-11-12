let input = document.getElementById("input");
let len = 17

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abscdefghijklmnopqrstuvwxyz";
let symbols = "<>|\?/{}[]~`!@#$%^&*()";
let number = "0123456789"
let allChar = upperCase+lowerCase+symbols+number;

function create(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while(len > password.length){
             password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        input.value=password;  
}

let icon = document.querySelector(".icon");

function iconVisible(){
    if(input.type == "password"){
        input.type = "text"
        icon.classList.remove("show")
        icon.classList.add("hide")
    }
    else{
        input.type="password";
        icon.classList.remove("hide")
        icon.classList.add("show")
    }
}
function copyPass() {
    if(input.value==="")
    {
        alert("There is no text to copy")
    }
    else{
        input.select();
    document.execCommand("copy");
    alert('password has been copied')
    }
}

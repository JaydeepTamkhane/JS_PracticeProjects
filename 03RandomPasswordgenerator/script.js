const passwordBox=document.getElementById('password')
const length=12;


const upppeCase="ABCDEFGHIJLKLMNOPQRSTUVWXYZ";
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = "!@#$%^&*()_-+={}[]|\:;<>,.?/`~";
const allChars=upppeCase+lowerCase+symbol+number;

function createPassword(){
    let password="";
    password+=upppeCase[Math.floor(Math.random()*upppeCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}


document.querySelector('#button')
.addEventListener('click',function(){
    createPassword();
})

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


document.querySelector('#copy')
.addEventListener('click',function(){
    copyPassword();
})
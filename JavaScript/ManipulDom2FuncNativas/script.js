//Manipulacao do DOM - Funcoes Nativas do Javascript

// id
let e1 = document.getElementById('cpf');
console.log(e1.value);

// classe
let e2 = document.getElementsByClassName('documento');
console.log(e2[0].value);

// seletor padrão - quarySelector
let e3 = document.querySelector('#rg');
console.log(e3.value);

let e4 = document.querySelectorAll('.documento');
console.log(e4[1].value);

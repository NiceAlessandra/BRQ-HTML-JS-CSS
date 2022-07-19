//const e let
var idade = 31;
idade = 32;
console.log(idade);

const cpf = 11122233344;
const chaveDeAcesso = "xpto123";
const urlPadrao = "http://localhost";

console.log(cpf);

// escopo

//VAR X LET
//global
var globalVar = 10;
let globalLet = 20;

globalVar = 100;
globalLet = 200;

console.log(globalVar);
console.log(globalLet);

//local -funciona dentro de uma função
function Mostrar(){
    var escopoLocal  = "Alexandre";

    console.log(escopoLocal);
}
Mostrar();

//de bloco - real diferença do var e do let
if (true){
    var blocoVar = "Paulo";
    let blocoLet = "Priscila";

    console.log(blocoVar);
    console.log(blocoLet);
}
    console.log(blocoVar);
    console.log(blocoLet); //let não aparece fora do bloco

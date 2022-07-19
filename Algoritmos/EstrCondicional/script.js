// estr condicional simples - if
var idade  = 19;

if (idade >= 18)
{
    console.log("Pode tirar carteira de motorista!")
}
//composta - else
var nota = 8;

if (nota >= 5){
    console.log("Aprovado");
} 
else if (nota ==4){
    console.log ("Aluno foi para conselho")

}
else {
    console.log ("Reprovado");
}

//encadeada - if dentro do outro
var nota = 8.5;

if (nota >= 5){
    console.log("Aprovado");
    if (nota >=8.5){
        console.log("Parabens, você ganhou uma bolsa de estudos de 50%!")
    }
} 
else {
    console.log ("Reprovado");
}
//substituir Caso.... - switch case - para várias operações aritméticas
var num1 = 5;
var num2 = 3;
var operacao = prompt ("Digite uma operação:");

console.log(operacao);

switch(operacao)
{
    case 'Soma':
        console.log (num1 + num2);
    break;

    case 'Subtração':
    console.log (num1 - num2);
    break;

    case 'Multiplicação':
    console.log (num1 * num2);
    break;

    case 'Divisão':
    console.log (num1 / num2);
    break;

    default:
        console.log("Operação Inválida!")
        break;
}

//funcoes ou métodos = ações (verbos) dentro da aplicação ex. calculadora posso criar função 
 
//somar

 //função 3 elementos - ter o nome da função - e ter argumentos ou parametros

function Somar (num1, num2, num3){

    var resultado = num1 + num2 + num3;
    // retorno
    return resultado;
}
console.log(Somar(41,7,12));
console.log(Somar(78,7,12));

// verificar médias = vetor ou array de notas
function VerificarMedias (notas){
    var media = 0;
    //soma dos valores/notas
    for (var i = 0; i < notas.length; i++) {
        
        media = media + notas[i];
        
    }
    //divisao pelo total de registros
    media = media / notas.length;

    return media;
}
var provas = [9,8,8.4];
console.log( VerificarMedias (provas));
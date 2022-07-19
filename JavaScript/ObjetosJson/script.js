//Chave: Valor
//String - texto
//Numero - inteiro / decimal
// Array []
// Booleano - v / f
// null

var objeto = {

    empresa  : "Google",
    endereco : "Avenida Paulista, 120",
    funcionarios: [
        {
            nome : "Paulo",
            email : "paulo@email.com",
            cpf : 111222333444,
            altura : 1.70,
            ativo : true
        },
        {
            nome : "Priscila",
            email : "priscila@email.com",
            cpf : 111222333400,
            altura : 1.70,
            ativo : true
        }
    ]
}
console.log(objeto);
console.log(objeto.empresa);//mostra so empresa
console.log(objeto.funcionarios[0].email); //mostra so o e.mail do funcionario


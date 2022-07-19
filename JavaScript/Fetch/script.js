//promise -> um pedido que ainda não foi atendido e pode ser resolvido ou rejeitado
//then aceite
//catch recusa
// finally finalmente
//via cep
var endpoint = "http://viacep.com.br/ws/12517540/json/";

fetch(endpoint, {
    method: 'GET',
    headers: {'Content-type': "aplication/json"},
})
.then(response => response.json())
.then(result => {
    console.log(result);
})
.catch(erro => console.log(erro))
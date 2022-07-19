// fetch
let inputCEP = document.querySelector('#cep');
let inputLogradouro = document.querySelector('#logradouro');
let inputBairro = document.querySelector('#bairro');
let inputLocalidade = document.querySelector('#localidade');
let inputUf= document.querySelector('#uf');
//via cep

const ConsultarCEP = (cep) => {
    var endpoint = "http://viacep.com.br/ws/'<cep>'/json/";

    fetch(endpoint, {
        method: 'GET',
        headers: {'Content-type': "aplication/json"},
    })
    .then(response => response.json())
    .then(result => {
        
        inputLogradouro.value = result.logradouro;
        inputBairro.value = result.bairro;
        inputLocalidade.value = result.localidade;
        inputUf.value = result.uf;
        // parei aqui

    })
    .catch(erro => console.log(erro))

    const ConsultarCEP = (cep) => {
        var endpoint = "http://viacep.com.br/ws/12517540/json/";
    }
}

inputCEP.addEventListener('input', () =>{
    if (inputCEP.value.length > 7 ){
        console.log('Pode consultar');
    }
})
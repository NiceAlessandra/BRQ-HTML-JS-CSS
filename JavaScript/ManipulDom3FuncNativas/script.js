// Manipulação do DOM

let botao       = document.querySelector('#adicionar');
let contador    = document.querySelector('#contador');
let manual      = document.querySelector('.manual');

const Somar = () => {

    //pegar o que esta dentro da tag, o zero - inner html (string)
    //converter string em int - parseint
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

// Evento - Manipulação
//precisa dos 2 paramentros evento e acao
botao.addEventListener('click', Somar);

manual.addEventListener('input', () => {
    contador.innerHTML = manual.value;
});



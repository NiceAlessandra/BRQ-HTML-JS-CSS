// Arrow Functions / funcoes seta

function DizerOlaMundo(){
    return 'Olá Mundo'
}

//decraracao da funcao como expressao constante

const DizerOlaMundo2 = function() {
    return "Olá Mundo 2";
}

//arrow function

const DizerOlaMundo3 = () => 'Olá Mundo 3';

const DizerOlaMundo4 = () => {
    return 'Olá Mundo 4';
}

// Recepcionar novas pessoas
const Recepcionar = (nome, sobrenome) => `Olá ${nome} ${sobrenome}`;
console.log(Recepcionar("Paulo", "Brandão"));

console.log(DizerOlaMundo());
console.log(DizerOlaMundo2());
console.log(DizerOlaMundo3());
console.log(DizerOlaMundo4());



const produtos = [
    {
        nome: 'Celular',
        categoria: 'Eletronico',
        preco: 900
    },
    {
        nome: 'MacBook',
        categoria: 'Eletronico',
        preco: 8000
    },
    {
        nome: 'Super Mario Bros',
        categoria: 'Jogo',
        preco: 60
    }
]

//Map
let convertido = produtos.map(x => x.preco * 5.40);
console.log(convertido);
// let convertido = produtos.map(x => {
//     console.log(x.preco * 5.40);
// });
// console.log(convertido);
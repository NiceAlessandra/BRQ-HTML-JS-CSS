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

//filter
let baratos = produtos.filter((x) => x.categoria == 'Eletronico');
console.log(baratos);

// let baratos = produtos.filter((x) => { 
//     console.log( x.categoria == 'Eletronico');
// });
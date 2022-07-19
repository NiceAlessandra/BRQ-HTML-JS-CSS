const pessoa = {
    nome: "Paulo",
    sobrenome: "Brandão",
    links: {
        instagram: "link1",
        linkedin: "link2",
        github: "link3",
    }
}

//const nome = pessoa.nome;
//const sobrenome = pessoa.sobrenome;
//console.log(nome);
//console.log(sobrenome);

//desentruturacao
const {nome, sobrenome} = pessoa;
console.log(nome);
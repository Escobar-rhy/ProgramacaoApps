const prompt = require("prompt-sync")()
let jogos = [];

while (true) {

    console.log("=====MENU=====")
    console.log("Digite 1 para cadastrar um jogo")
    console.log("Digite 2 para excluir um jogo")
    console.log("Digite 3 para ver a lista de jogos")
    console.log("Digite 4 para editar um jogo")
    console.log("Digite 5 para SAIR")

    let opcao = prompt("Escolha uma opção: ")

    if(opcao == 1){
        let nome = prompt("Digite o nome do jogo: ")

        if(jogos.includes(nome)){
            console.log("Esse jogo ja foi cadastrado!")
        }
        else{
            jogos.push(nome)
            console.log("Jogo cadastrado com sucesso!")
        }
    }

    else if(opcao == 2){
        let nome = prompt("Digite o nome do jogo que deseja excluir: ")
        let excluir = jogos.indexOf(nome);

        if(excluir !== -1){
            jogos.splice(excluir, 1)

            console.log("Jogo excluido!")
        }
    }

    else if(opcao == 3){
        console.log(jogos)
    }

    else if(opcao == 4){
        let antigo = prompt("Digite o jogo que deseja editar: ")
        let editar = jogos.indexOf(antigo);

        if(editar !== -1){
            let novo = prompt("Digite o novo nome: ")

            if(jogos.includes(novo)){
                console.log("Esse nome ja existe!");
            }
            else{
                jogos[editar] = novo
                console.log("Jogo editado!");
            }}
            else{
                console.log("Jogo não encontrado!")
            }
    }

    else if(opcao == 5){
        console.log("Saindo...")
        break
    }

    else{
        console.log("Opcão invalida!")
    }

    
    
}

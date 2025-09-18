const prompt = require("prompt-sync")();

const quartos = new Array(10).fill(null);

const n = parseInt(prompt('Quantos quartos serão alugados? '));

// Loop para registrar os aluguéis
for (let i = 0; i < n; i++) {
    console.log(`\nAluguel #${i + 1}:`);
    
    let numQuarto;
    let nomeEstudante;
    let emailEstudante;
    
    let quartoOcupado = true;
    while(quartoOcupado) {
        numQuarto = parseInt(prompt('Escolha um Quarto(0-9): '));
        
        // Verifica se o quarto está disponível ou não
        if (numQuarto >= 0 && numQuarto < 10 && quartos[numQuarto] === null) {
            quartoOcupado = false; // Quarto livre, sai do loop
        } else {
            console.log('Quarto ocupado. Escolha outro ');
        }
    }

    nomeEstudante = prompt('Nome: ');
    emailEstudante = prompt('Email: ');
    
    // Armazena um objeto com os dados do estudante no array de quartos...
    quartos[numQuarto] = {
        nome: nomeEstudante,
        email: emailEstudante
    };
}

// --- Relatório ---
console.log('\nQuartos ocupados:');

// Percorre o array de quartos para imprimir o relatório final....
for (let i = 0; i < quartos.length; i++) {
    if (quartos[i] !== null) {
        console.log(`${i}: ${quartos[i].nome}, ${quartos[i].email}`);
    }
}

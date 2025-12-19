// Função para calcular o saldo e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de rankeadas
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna um objeto com saldo e nível
    return { saldoVitorias, nivel };
}

// Função principal com laço de repetição para testar vários casos
function executarCalculadora() {
    // Array com diferentes cenários de teste
    const jogadores = [
        { vitorias: 5, derrotas: 2 },
        { vitorias: 15, derrotas: 5 },
        { vitorias: 35, derrotas: 10 },
        { vitorias: 65, derrotas: 20 },
        { vitorias: 85, derrotas: 15 },
        { vitorias: 95, derrotas: 10 },
        { vitorias: 120, derrotas: 30 }
    ];

    console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");

    // Laço de repetição para processar cada jogador
    for (let i = 0; i < jogadores.length; i++) {
        const { vitorias, derrotas } = jogadores[i];
        const resultado = calcularNivel(vitorias, derrotas);

        console.log(`Jogador ${i + 1}:`);
        console.log(`Vitórias: ${vitorias} | Derrotas: ${derrotas}`);
        console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
        console.log("---");
    }
}

// Executa o programa
executarCalculadora();

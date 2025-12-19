const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo aventureiro");

rl.question("Digite o nome do Herói: ", (nomeDoHeroi) => {
    rl.question("Digite a experiência do Herói: ", (expHeroi) => {
        expHeroi = Number(expHeroi);
        let nivel = "";
 {
    if (expHeroi < 1000) {
        nivel = "Ferro";
    }else if (expHeroi >=1001 && expHeroi < 2000) {  
        nivel = "Bronze";
    }else if (expHeroi >=2001 && expHeroi < 5000) { 
        nivel = "Prata";
    }else if (expHeroi >=5001 && expHeroi < 7000) {  
        nivel = "Ouro";
    }else if (expHeroi >=7001 && expHeroi < 8000) {  
        nivel = "Platina";
    }else if (expHeroi >=8001 && expHeroi < 9000) {  
        nivel ="Ascendente";
    }else if (expHeroi >=9001 && expHeroi < 10000){  
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    }
        console.log("nivel definido:", nivel);
        console.log("O Herói de nome: " + (nomeDoHeroi) + " está no nível "+ (nivel));
         rl.close();
    });
})

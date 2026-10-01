const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

 
async function main() {
// 1. Interface de leitura

    const rl = readline.createInterface({ input, output });

    // 2. Leitura de dados
    const dataInicialStr = await rl.question("Digite a data inicial (AAAA-MM-DD): ");
    const dataFinalStr = await rl.question("Digite a data final (AAAA-MM-DD): ");

    let dataInicial = new Date(dataInicialStr);
    let dataFinal = new Date(dataFinalStr);
    let dias;
    let meses;
    let anos;

    // dataFinal - dataInicial = Milissegundos. (1000*60*60*24) = 86400000
    // 1 segundo = 1000 milissegundos / 1 minuto = 1000*60 segundos / 1 hora = 1000*60*60 milissegundos / 1 dia = 1000*60*60*24 milissegundos

    // Math.trunc() = Retorna a parte inteira de um número, removendo os dígitos decimais.

    dias = (dataFinal - dataInicial) / 86400000;
    meses = Math.trunc(dias / 30);
    anos = Math.trunc(dias / 365);

    calc_qtd_meses = meses - (anos * 12);
    calc_qtd_dias = dias - (meses * 30);

    console.log(`\nNúmero de Dias: ${calc_qtd_dias}`);
    console.log(`\nNúmero de Meses: ${calc_qtd_meses}`);
    console.log(`\nNúmero de Anos: ${anos}`);

    dias = 0;

    rl.close();

}

main();
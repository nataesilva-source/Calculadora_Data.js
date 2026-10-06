const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("======== Calculadora exemplo ====");
    let repetir;

    do {
        const n1 = Number(await rl.question("Digite o primeiro número: "));
        const n2 = Number(await rl.question("Digite o segundo número: "));

        console.log(`Soma: ${n1 + n2}`);
        console.log(`Subtração: ${n1 - n2}`);
        console.log(`Multiplicação: ${n1 * n2}`);
        console.log(`Divisão: ${n2 === 0 ? 'indefinida (não é possível dividir por zero)' : n1 / n2}`);

        repetir = (await rl.question("Deseja realizar outro cálculo? (s/n): ")).trim().toLowerCase();
    } while (repetir === 's');

    rl.close();
}

main().catch((erro) => {
    console.error('Ocorreu um erro:', erro);
    process.exitCode = 1;
});

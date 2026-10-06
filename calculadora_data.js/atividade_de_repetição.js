const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
    const rl = readline.createInterface({ input, output });

    console.log("======== Calculadora exemplo ====");
//2. entrada de dados

const n1 = Number(await rl.question("Digite o primeiro número: "));
const operador = await rl.question("Digite o operador (+, -, *, /): ");
const n2 = Number(await rl.question("Digite o segundo número: "));

let resultado;

switch (operador) {
    case '+':
        resultado = n1 + n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
    case '*':
        resultado = n1 * n2;
        break;
    case '/':
        resultado = n2 === 0 ? 'indefinida (não é possível dividir por zero)' : n1 / n2;
        break;
    default:
        console.log("Operador inválido!");
        return;
}

    console.log(`\nResultado: ${resultado}`);
    rl.close();
}
main();

















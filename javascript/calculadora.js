
var operacao;
var number1;
var number2;

//seta a operação escolhida no formulário
function setOperacao(value) {
    operacao = value;
}

//seta os numeros escolhidos no formulário
function setNumber1(elemento) {
    number1 = parseFloat(elemento.value);
}
function setNumber2(elemento) {
    number2 = parseFloat(elemento.value);
}

//operações
function soma() {
    return number1 + number2;
}
function subtracao() {
    return number1 - number2;
}
function multiplicacao() {
    return number1 * number2;
}
function divisao() {
    return number1 / number2;
}


function calcular() {

    if (operacao == 'soma') {
        escreve(soma())
    }
    if (operacao == 'subtracao') {
        escreve(subtracao())
    }
    if (operacao == 'multiplicacao') {
        escreve(multiplicacao())
    }
    if (operacao == 'divisao') {
        escreve(divisao())
    }
}

function escreve(resultado) {
    const elemento = getElementoResultado();
    elemento.innerHTML = `O resultado é: ${resultado}`;
}

function getElementoResultado() {
    return document.getElementById('resultado');
}
// Pegar todos os elementos HTML via DOM
let soma = document.getElementById('resultado-soma');
let subtracaoAporB = document.getElementById('res-sub-A-por-B'); 
let subtracaoBporA = document.getElementById('res-sub-B-por-A'); 
let multiplicacao = document.querySelector("#res-mult" );
let divAeB = document.querySelector("#res-div-A-por-B");
let divBeA = document.querySelector("#res-div-B-por-A");
let potenciaAeB = document.querySelector("#res-pot-A-por-B");
let potenciaBeA = document.querySelector("#res-pot-B-por-A");
let raizDeA = document.querySelector("#res-raiz-A");
let raizDeB = document.querySelector("#res-raiz-B");
let fatorialA = document.querySelector("#res-fat-A");
let fatorialB = document.querySelector("#res-fat-B");
let porcentagemA = document.querySelector("#res-porcentagem-A-B");
let porcentagemB = document.querySelector("#res-porcentagem-B-A");
let media = document.querySelector("#resultado-media");
let botaoCalcular = document.getElementById('botao-calcular');

// Evento de click no botão calcular, que passa a função calcular.
botaoCalcular.addEventListener("click", calcular);

// Iniciar todos os resultados com Zero.
soma.innerHTML = 0;
subtracaoAporB.innerHTML = 0;
subtracaoBporA.innerHTML = 0;
multiplicacao.innerHTML = 0; 
divAeB.innerHTML = 0;
divBeA .innerHTML = 0;
potenciaAeB.innerHTML = 0;
potenciaBeA.innerHTML = 0; 
raizDeA.innerHTML = 0;
raizDeB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

// Criando as funções com os cálculos.
function somar(a, b) {
    return a + b;
}

function subtrairAporB (a, b) {
    return  a - b ;
}

function subtrairBporA (a, b) {
    return  b - a;
}

function multiplicar (a, b) {
    return  a * b;
}

function dividirAporB (a, b) {
    return  a / b;
}

function dividirBporA (a, b) {
    return  b / a;
}

function potenciaDeAnaBaseB (a, b) {
    return  a ** b;
}

function potenciaDeBnaBaseA (a, b) {
    return  b ** a ;
}

function  raizQuadradaDeA (a, b) {
    return  Math.sqrt(a) ;
}

function  raizQuadradaDeB (a, b) {
    return   Math.sqrt(b) ;
}

function  fatorialDeA (a, b) {
    let fatorial = a;
    let resultado = fatorial;

    for (let i = 1; i < fatorial; i++) {
        resultado *=i;
    }

    return  resultado;
}

function  fatorialDeB (a, b) {
    
    let fatorial = b;
    let resultado = fatorial;

    for (let i = 1; i < fatorial; i++) {
        resultado *=i;
    }

    return  resultado;
}

function porcentagemDeAemRelacaoB (a, b) {

    let porcentagem = (b * 100) / (a);

    return porcentagemArredondada = Math.round(porcentagem);

    //Sem arrendondamento 
    /* return (b * 100) / (a);
    
    */

}

function porcentagemDeBemRelacaoA (a, b) {

    let porcentagem = (a * 100) / (b);

    return  porcentagemArredondada = Math.round(porcentagem);

    //Sem arrendondamento 

    /* return (a * 100) / (b);
    
    */
}

function calculoMedia(a,b) {    

    return  (a + b) / 2;

}

// Função calcular para exibir os resultados.
function calcular() {
    let inputA = document.getElementById('numero1').value;
    let inputB = document.getElementById('numero2').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);  
    
    soma.innerHTML = somar(a, b);
    subtracaoAporB.innerHTML = subtrairAporB (a, b);
    subtracaoBporA.innerHTML = subtrairBporA (a, b);
    multiplicacao.innerHTML = multiplicar (a, b);
    divAeB.innerHTML = dividirAporB (a, b).toFixed(2);
    divBeA .innerHTML = dividirBporA (a, b).toFixed(2);
    potenciaAeB.innerHTML = potenciaDeAnaBaseB (a, b);
    potenciaBeA.innerHTML = potenciaDeBnaBaseA (a, b);
    raizDeA.innerHTML = raizQuadradaDeA (a, b).toFixed(2);
    raizDeB.innerHTML = raizQuadradaDeB (a, b).toFixed(2);
    fatorialA.innerHTML = fatorialDeA (a, b);
    fatorialB.innerHTML = fatorialDeB (a, b);
    porcentagemA.innerHTML = porcentagemDeAemRelacaoB (a, b);
    porcentagemB.innerHTML = porcentagemDeBemRelacaoA (a, b);
    media.innerHTML = calculoMedia(a,b)

} 


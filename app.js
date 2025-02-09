//------------------------------------------------------------------------

console.log('// Questão 01');

let nome = 'Irlanda Hildeney Oliveira Teixeira';
console.log(nome);

//------------------------------------------------------------------------

console.log('// Questão 02');

let idade = 25;
let altura = 1.75;

console.log('Idade: '+idade+', Altura: '+altura);

//------------------------------------------------------------------------

console.log('// Questão 03 ');

let preco = 50;
let desconto = 20;
total_valor = preco * (desconto/100);


console.log('Preço: R$ '+preco.toFixed(2)+', com desconto de 20%. Valor final: R$ '+total_valor.toFixed(2));

//------------------------------------------------------------------------

console.log('// Questão 04');

let temperatura = 30;

if (temperatura > 25){
    console.log('Está calor!');
}else{
    console.log('Está freco!');
}

//------------------------------------------------------------------------



console.log('// Questão 05');

let idade_ = 15;

//usando operador ternario
resultado = idade_ >= 18 ? 'Você é maior de idade!' : 'Você é menor de idade!';
console.log(resultado);


//------------------------------------------------------------------------
console.log('// Questão 06 ');

let nota = 4;

if (nota >= 7){
    console.log('Aprovado');
} else if (nota > 4 ){
    console.log('Recuperação');
} else{
    console.log('Reprovado');
}

//------------------------------------------------------------------------

console.log('// Questão 07');

let numero1 = 56;
let numero2 = 56;

// usando operador ternario
let comparacao = numero1 == numero2? 'Os números são iguais' : 'Os números são diferentes';
console.log(comparacao);

//------------------------------------------------------------------------
console.log('// Questão 08 ');


let nomeUser = 'Gabriel Oliveira';
let idadeUser = 22;

console.log(`Olá meu nome é ${nomeUser} e eu tenho ${idadeUser} anos.`);

// ------------------------------------------------------------------------
console.log('// Questão 09 ');

let num = 1;

while (num <= 10){
    console.log(num);
    num++;
} 
// ------------------------------------------------------------------------
//coloquei em comentario para não ter erro na execução do código, devido a utilização do prompt para obter os dados do usuario.
/*
console.log('// Questão 10 ');

let numR ;

while (numR != 5){
    // uso do prompt para obter dados 
    numR = parseInt(prompt('Digite um numero qualquer que nao seja (5)'));
    
}

console.log('Você nao seguiu as instruções. Programa encerrado!')
*/

//------------------------------------------------------------------------


console.log('// Questão 11 ');

let tabuada = 7;

let numS = 1;
console.log('=========== Tabuada =============')
while (numS <= 10){
    console.log('=======================')
    console.log(`${tabuada} x ${numS} = `,(tabuada*numS));

    numS++;
}

//------------------------------------------------------------------------
console.log('//Questão 12 ');

let num_A = 0;

console.log('Numeros Pares de 1 a 20: ')
while(num_A <= 20){
            
        num_A++;
        
        if (num_A % 2 == 0 ){
            console.log(num_A);
        }
}

//------------------------------------------------------------------------
console.log('// Questão 13')

function calculeAreaCirculo(raio){
    let pi = 3.14159;
    let area = pi * (raio**2);
    return area

}

let raio = 5;
let area = calculeAreaCirculo(raio);
console.log(`A area do circulo é: ${area}`)

//------------------------------------------------------------------------

console.log('//Questão 14');

function somaDois(x,y){
    let soma = x + y;
    return soma;

}

let x = 89;
let y = 1000;

let result = somaDois(x,y);
console.log(`A soma entre ${x} e ${y} é igual a ${result}`);

/* explicação
A função somaDois recebe dois parametros x e y, que retorna uma soma entre os 
números. Após isso, é criada a variavel soma, que faz a operação e o return, retorna
o valor da soma.
A variavel x e y criadas logo em seguida servem como armazenamento da informação que 
será manipulada.o console.log exibe o resultado desta operação. */

//------------------------------------------------------------------------

console.log('//Questão 15');
/*Podemos utilizar a função da questão anterior e mudar apenas a variavel 'let' para 'const'
para a variavel nao mude de valor
*/

function somaDois(x,y){
    let soma = x + y;
    return soma;

}

const a_num1 = 10;
const b_num2 = 20;

const resultSoma = somaDois(a_num1,b_num2);

console.log(resultSoma);


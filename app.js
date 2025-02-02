//01-Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
console.log('------------------- Questão: 01 ------------------------');

let nome = 'Irlanda Hildeney Oliveira Teixeira';
console.log(nome);

//02 - Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.

console.log('------------------- Questão: 02 ------------------------');

let idade = 25;
let altura = 1.75;

console.log('Idade: '+idade+', Altura: '+altura);

//03 - Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.

console.log('------------------- Questão: 03 ------------------------');

let preco = 50;
let desconto = 20;
total_valor = preco * (desconto/100);


console.log('Preço: R$ '+preco.toFixed(2)+', com desconto de 20%. Valor final: R$ '+total_valor.toFixed(2));

//04-Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".

console.log('------------------- Questão: 04 ------------------------');

let temperatura = 30;

if (temperatura > 25){
    console.log('Está calor!');
}else{
    console.log('Está freco!');
}

//05-Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".



console.log('------------------- Questão: 05 ------------------------');

let idade_ = 15;

//usando operador ternario
resultado = idade_ >= 18 ? 'Você é maior de idade!' : 'Você é menor de idade!';
console.log(resultado);


//06-Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
console.log('------------------- Questão: 06 ------------------------');

let nota = 4;

if (nota >= 7){
    console.log('Aprovado');
} else if (nota > 4 ){
    console.log('Recuperação');
} else{
    console.log('Reprovado');
}

//07- Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".

console.log('------------------- Questão: 07 ------------------------');

let numero1 = 56;
let numero2 = 56;

// usando operador ternario
let comparacao = numero1 == numero2? 'Os números são iguais' : 'Os números são diferentes';
console.log(comparacao);

//08- Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
console.log('------------------- Questão: 08 ------------------------');


let nomeUser = 'Gabriel Oliveira';
let idadeUser = 22;

console.log(`Olá meu nome é ${nomeUser} e eu tenho ${idadeUser} anos.`);

//09-Crie um loop que imprima os números de 1 a 10 na tela.

console.log('------------------- Questão: 09 ------------------------');

let num = 1;

while (num <= 10){
    console.log(num);
    num++;
} 
// 10-  Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
/*
console.log('------------------- Questão: 10 ------------------------');

let numR ;

while (numR != 5){
    // uso do prompt para obter dados 
    numR = prompt('Digite um numero qualquer que nao seja (5)');
    
}

console.log('Você nao seguiu as instruções. Programa encerrado!')
*/

// 11-Crie um loop que imprima a tabuada do número 7, de 1 a 10.


console.log('------------------- Questão: 11 ------------------------');

let tabuada = 7;

let numS = 1;
console.log('=========== Tabuada =============')
while (numS <= 10){
    console.log('=======================')
    console.log(`${tabuada} x ${numS} = `,(tabuada*numS));

    numS++;
}

//12 - Crie um loop que exiba todos os números pares de 0 a 20.
console.log('------------------- Questão: 12 ------------------------');

let num_A = 0;

console.log('Numeros Pares de 1 a 20: ')
while(num_A <= 20){
            
        num_A++;
        
        if (num_A % 2 == 0 ){
            console.log(num_A);
        }
}

// 13 - Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.





console.log('------------------- Questão: 13 ------------------------');
console.log('------------------- Questão: 14 ------------------------');
console.log('------------------- Questão: 15 ------------------------');
console.log('------------------- Questão:  ------------------------');
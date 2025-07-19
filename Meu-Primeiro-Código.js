const saudação = "Olá, mundo!";
const dia = "18/07/2025"
const Meunomecompleto = "Affonso Mello";
const AnoEmQueNasci = 1999;
const SouUniversitário = false;
let cidadeOndeMoro = "Duque de caxias";
let idade = 25;
console.log (saudação + " hoje é dia " + dia + " e meu nome é, " + Meunomecompleto + ", " + "tenho " + idade + " de idade, " + "e moro em " + cidadeOndeMoro + ". " + "E dizem que sou universitário, mas isso é " + SouUniversitário + "."); 


const peso = 55;
const altura = 1.65;
const imc = peso / (altura * altura);
console.log ("meu peso é " + peso + ", minha altura é " + altura + " metros " + "portanto meu IMC é "+ imc.toFixed(2) + ".");  
// Arredondando o IMC para duas casas decimais
console.log ("Sou maior de idade? " + (idade >= 18)); // Verificando se sou maior de idade
console.log(idade % 2 === 0 ? "minha idade de 25 anos é par." : "minha idade de 25 anos é ímpar."); // Verifica se ,minha idade é par ou ímpar.
// Testando diferenças entre igualdade e identidade abaixo.
console.log("10 == '10' ?", 10 == "10");
// True já que o operador de igualdade (==) compara apenas os valores, mas não os tipos.

console.log("10 === '10' ?", 10 === "10");
// False já que o operador de identidade (===) compara tanto os valores quanto os tipos.

console.log("10 !== '10' ?", 10 !== "10");
// True já que o operador de negação de identidade (!==) verifica se os valores ou tipos são diferentes.

console.log("10 != '10' ?", 10 != "10");
// False já que o operador de negação de igualdade (!=) compara apenas os valores, mas não os tipos.

const temperaturaCelsius = 25;
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log("Sou totalmente leigo em programação, mas finalmete decidi aprender sobre o assunto, estou há 2 dias estudando lógica de programação com Javascript, já tinha baixado e configurado o Node.js, e o VS code, e também comecei a aprender o básico do básico de js, e hoje criei o meu primeiro código, estou escrevendo essa string para deixar registrado o início da minha jornada até ser um dev back-end júnior, que é o meu objetivo.")
console.log("me desejem sorte!");
console.log("apesar desse ser meu primeiro código, eu já usei o terminal do vs code e o github, para tentar criar um blog com I.A, com a extenção Gemini Code Assist, mas não deu muito certo, foram surgindo erros que não consegui resolver, o que me deu um enorme incentivo para aprender programação");
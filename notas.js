alert("Digite abaixo suas notas");

let resultado1= prompt("Primeira nota: ");
let resultado2= prompt("Segunda nota: ");
let resultado3= prompt("Terceira nota: ");
let resultado4= prompt("Quarta e ultima nota: ");

let resultado= (Number(resultado1) + Number(resultado2) + Number(resultado3) + Number(resultado4)) / 4;

if(resultado1>10.0 || resultado2>10.0 || resultado3>10.0 || resultado4>10.0)
alert("Digite somente notas entre 0 e 10");

else if(resultado1<0.0 || resultado2<0.0 || resultado3<0.0 || resultado4<0.0)
alert("Digite somente notas entre 0 e 10");

else if(resultado<5.0)
alert(`Você ficou com média ${resultado} Resultado: Reprovado`);

else if(resultado>5.0 && resultado<7.0)
alert(`Você ficou com média ${resultado} Resultado: Recuperação`);

else if(resultado>7.0)
alert(`Você ficou com média ${resultado} Resultado: Aprovado`);

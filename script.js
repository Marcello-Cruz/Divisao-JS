const numerador = Number(prompt("Digite o numerador"));
const denominador = Number(prompt("Digite o denominador"));

if (Object.is(numerador, NaN) || Object.is(denominador, NaN) ){
    alert("Informe apenas números");
}else if (denominador == 0){
    alert("Não é possível dividir por zero.");
}else{
    const divisao = Number(numerador / denominador);
alert(`${numerador} dividido por ${denominador} é igual a ${divisao}.`)
}
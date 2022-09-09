const conjuntoDeNumeros = 500;
let somaImpares = 0;

for (let i = 1; i <= 500; i++){
  if(i % 2 == 1 && i % 3 == 0){
    somaImpares += i;
  }
}

console.log(somaImpares)
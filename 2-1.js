var n = prompt('Введіть кількість магазинів:');
n=+n;
var factorial =1;
do{
  if (n ==0){
    factorial=1;
    break;
  }
  factorial = factorial*n;
  n=n-1;
} while (n>0);
document.write("Кількість магазинів ="+factorial);

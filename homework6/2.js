// Створіть чотири функції для арифметичних дій: додавання, віднімання,
 // множення і ділення. Кожна функція повинна приймати 2 параметра і виводити
 //  результат їх обчимлення. Функція ділення повинна робити перевірку ділення на нуль.
 function sum(a,b){
   return +a + +b;
 }
 function pow(a,b){
   return a * b;
 }
 function sub(a,b){
   return a - b;
 }
 function div(a,b){
   if (b==0){
     return "ділення на нуль";
   } else{
     return a / b;
   }
 }

 var x1 = prompt('first value =',1);
 var x2= prompt('second value =',1);
 var func= prompt('function:(sum, pow, sub, div)', "sum");
 switch (func) {
   case "sum":
       alert (sum(x1, x2));
     break;
  case "pow":
       alert( pow(x1, x2)) ;
      break;
      case "sub":
          alert( sub(x1, x2) );
          break;
          case "div":
              alert( div(x1, x2)) ;
              break;
}

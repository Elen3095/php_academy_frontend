 // Створити масив розмірністю N елементів, заповнити його довільними цілими
 // значеннями. Вивести найбільше значення масиву, найменше значення масиву,
 // загальну суму елементів, середнє арифметичне усіх елементів, вивести всі
 // непарні значення.

 var array = [1,3,4,6,7,2,5,8,11];
 document.write(array);
// the biggest
var max =Number.NEGATIVE_INFINITY;
for (var i=0; i<array.length; i++){
  if( array[i] > max){
    max = array[i];
  }
}
document.write('<br>');
document.write("Max value=", max);

// less
var min =Number.POSITIVE_INFINITY;
for (var i=0; i<array.length; i++){
  if( array[i] < min){
    min = array[i];
  }
}
document.write('<br>');
document.write("Mix value=", min);

// sum
var sum =0;
for (var i=0; i<array.length; i++){
    sum+=array[i];
}
document.write('<br>');
document.write("sum value=", sum);

// arithmetic mean
var arithm;
arithm=sum/array.length;
document.write('<br>');
document.write("arithm value=", arithm.toFixed(2));

// Odd values
var odd=[];
for (var i=0; i<array.length; i++){
    if( (array[i] % 2) != 0){
      odd.push(array[i]);
    }
}
document.write('<br>');
document.write("Odd values=", odd);

document.write('<br>');

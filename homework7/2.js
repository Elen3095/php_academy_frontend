// Створити двомірний масив елементів розміром 5х5 і заповнити його довільними
//  цілочисельними значеннями. По головній діагоналі всі числа зі знаком (-)
//  замінити на 0, а числа зі знаком (+) на число
var arr2= new Array(5);
// create interval of values for random method
var maxValue=-10;
var minValue=10;

for (var i=0; i<arr2.length; i++){
    arr2[i]=new Array(5);
    for(var j=0; j<arr2[i].length; j++){
      arr2[i][j]=(Math.random() * (maxValue - minValue) + minValue).toFixed(2);
      // перевірка на >0 i <0
      if(j==i){
        if(arr2[i][j]<0){
          // виводимо індекси і елементи масиву, які згенерувалися від'ємними
          document.write("index=", i, ",element:",arr2[i][j],'<br>');
          //
          arr2[i][j]=0;
        } else if (arr2[i][j]>0) {
          arr2[i][j]=Math.round(arr2[i][j]);
          }
          //
      }
    }
}

for (var i=0; i<arr2.length; i++){
    document.write(arr2[i].join("|  "));
    document.write('<br>');
}

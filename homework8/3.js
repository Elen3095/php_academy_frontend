// адание 3.
//
// Разработайте функцию-конструктор, которая будет создавать объект Human(человек)
// создайте массив объектов и реализуйте функцию, которая будет сортировать
// элементы массива по значению свойства Age по возрастанию или по убыванию.
function Human(Age){
this.Age=Age;
}
var a = new Human(20);
var b = new Human(30);
var c = new Human(10);

var arr = [a, b, c];
// дістаємо елементи з властивістю Age
var arr2=[];
arr.forEach(function(item, i, arr) {
  var value=item.Age;
  arr2.push(value);
});
  // alert(arr2);

// функція сортування чисел для sort
function compareNumeric(x1, x2) {
  if (x1 > x2) return 1;
  if (x1 < x2) return -1;
}
arr2.sort(compareNumeric);
alert(arr2);

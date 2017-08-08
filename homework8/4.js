// Задание 4.
// Разработайте функцию-конструктор, которая будет создавать объект Human(человек)
 // добавьте на свое усмотрение свойства и методы в этот объект. Подумайте какие
 // методы и свойства следует сделать уровня экземпляра, а какие уровня функции-конструктора.
function Human(name, surname, age){
  this.name=name;
  this.surname=surname;
  this.age=age;
  this.sayHi=function(){
    alert("Hi,"+this.name);
  };
  this.toString = function(){
    return ("Name user:"+this.name+", surname:"+this.surname+", age:"+this.age);
  };
}
var s= new Human("Sergio", "Macogon", 23);
alert (s);

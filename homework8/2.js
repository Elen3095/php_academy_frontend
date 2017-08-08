// Задание 2.
// Создайте функцию конструктор, которая создает объект со свойством экземпляра,
 // свойством функции-конструктора, с методом экземпляра и методом
 // функции-конструктора. Имена выберите произвольно.
function Const(name){
 this.name=name;
 this.say="HI";
 this.sayName= function(){
   alert(this.name);
 };
 this.sayBye= function(){
   alert("Bye!");
 };
}
var o= new Const("Oleg");
console.log(o);

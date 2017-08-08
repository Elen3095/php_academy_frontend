// Задание 1.
// Создайте функцию-конструктор Box(коробка) для создания объекта со свойствами
 // Height(высота), Width(ширина), Depth(глубина) и Material(материал). Также в
  // объекте должны быть методы Volume - для получения объема и equals() – для
  // сравнения объектов, объекты должны считаться равными если содержат одинаковые
  //  значения в свойстве Material.
function Box(Height, Width, Depth, Material) {
  this.Height=Height;
  this.Width=Width;
  this.Depth=Depth;
  this.Material=Material;
  this.Volume = function(){
    return this.Height*this.Width*this.Depth;
  } ;
  this.equals= function(Obj){
    if(Obj.Material==this.Material){
      return true;
    }
    return false;
  }
}

var box= new Box(10, 20, 30, "gold");
var box2= new Box(20, 20, 30, "gold");

console.log(box);
console.log(box2);
console.log(box2.equals(box));

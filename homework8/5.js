// Задание 5.
// Создайте пример демонстрирующий назначение метода toString()
var date= new Date;
alert(date);

function User(){
  this.name=prompt("Tell me your name:");
  this.age=prompt("Tell me your age:");
  this.toString=function(){
    return "User name :"+this.name+", user age:"+ this.age;
  }
};
var X= new User;
alert (X);

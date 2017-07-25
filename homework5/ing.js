// task1
var x = 6;
var y = 15;
var z = 4;

// x+=y-x++*z
var rez = x+=y-x++*z;
alert ("1:"+" "+ rez);
x=6;

//z=--x-y*5
var rez2 = z=--x-y*5;
alert ("2:"+" "+ rez2);
z = 4;

//y/=x+5%z
var rez3 = y/=x+5%z;
alert ("3:"+" "+ rez3);
y = 15;

//z=x++ +y*5
var rez4 = z=x++ +y*5;
alert ("4:"+" "+ rez4);
z = 4;

//z=--x-y*5
var rez5 = x=y-x++ *z;
alert ("5:"+" "+ rez5);

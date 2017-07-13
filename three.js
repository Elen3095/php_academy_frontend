//task3
var h=prompt("Введіть висоту:", 1);
var r=prompt("Введіть радіус:",  1);
var _PI =3.1415;
var v;
var s;
// calculation
v = _PI*(+r)*(+r)*(+h);
s = 2*_PI*(+r)*(+r + +h);

// output
alert("V="+v+" "+"S="+s);

// прямокутник
var x1=prompt("Введіть довжину сторони прямокутника(*)",3);
var i, j;
document.write("<br>");

for(i=1; i<=x1; i++){
  for(j=1; j<=x1; j++){
    document.write("&nbsp"+"&nbsp"+"*");
  }
  document.write("<br>");
}

// прямокутний трикутник
var x2=prompt("Введіть довжину сторони прямокутного трикутника(*)",3);
var i2, j2;
document.write("<br>");

for(i2=1; i2<=x2; i2++){
  for(j2=1; j2<=i2; j2++){
    document.write("&nbsp"+"&nbsp"+"*");
  }
  document.write("<br>");
}


// рівносторонній трикутник
var x3=prompt("Введіть довжину сторони прямокутного трикутника(*)",3);
var i3, j3;
document.write("<p>");
for(i3=1; i3<=x3; i3++){
  for(j3=1; j3<=i3; j3++){
    for (count =0 ;count<=j3/2; count++){
      document.write("&nbsp");
    }

    document.write("&nbsp"+"*");
  }
  document.write("<br>");
}


// ромб
var x4=prompt("Введіть довжину сторони ромба(*)",3);
var i4, j4,i5,j5;
document.write("<br>");
x4=(+x4);

for(i4=1; i4<=x4; i4++){
  for(j4=1; j4<=i4; j4++){
    for (count =0 ;count<=j4/2; count++){
      document.write("&nbsp");
    }

    document.write("&nbsp"+"*");
  }
  document.write("<br>");
}
for(i4=1; i4<=x4; i4++){
  for(j4=x4-1-i4; j4>=0; j4--){
    for (count =0 ;count<=(x4-1-i4)/2; count++){
      document.write("&nbsp");
    }
    document.write("&nbsp"+"*");
  }
  document.write("<br>");
}

document.write("</p>");

// task4
var a=prompt("A:",1);
var b=prompt("B:",4);
var sum=0;
var n='';

if ((+a)<(+b)){
  for((+a); +a<+b; ++a){
    sum+=(+a);
    if((+a)%2==0){
      continue;
    } else {
     n=n+(+a)+" ";
    }

  }
  document.writeln("Sum="+sum);
  document.writeln("<br>");
  document.writeln("непарні:"+n);
} else {
  alert("A>B!");
}

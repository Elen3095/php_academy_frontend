(function () {
var time=0;
var t1;
var p1 = document.getElementById("p1");

start.onclick=function(){StartTimer()};
stop1.onclick=function(){StopTimer()};
restart.onclick=function(){Zero()};

function StartTimer() {
    t1=setInterval(function(){
        if (time<10){
        p1.innerHTML="00"+":"+"00"+":"+"0"+time;
    } else if(time>9){
        p1.innerHTML="00"+":"+"00"+":"+time;
    } else if(time>99){
        var timeQ=time.split( /(?=(?:\d{2})+$)/ );
        p1.innerHTML="00"+":"+"0"+":"+timeQ[0]+":"+timeQ[1];
    }
    else if(time>999){
        p1.innerHTML="00"+":"+":"+timeQ[0]+":"+timeQ[1];
    }
        time++;
    },1000);
}
function StopTimer(){
    clearInterval(t1);
}

function Zero(){
    time=0;
    p1.innerHTML="00"+"."+"00"+"."+"00";
}
})();

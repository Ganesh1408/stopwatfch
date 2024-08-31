
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hr = 00;
let min=00;
let sec=00;
let count=00;

startBtn.addEventListener('click',function(){
    
    timer = true;
    stopwatch();
    
});
stopBtn.addEventListener('click',function(){
    timer=false;
    

});
resetBtn.addEventListener('click',function(){
    timer=false;
    hr=0;
    min=0
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
});


function stopwatch(){
    if (timer){
        count++;
        if (count == 100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++
            sec=0;
        }
        if(min==60){
            hr++
            min=0;
            sec=0   
        }
    
     let hrstring = hr;
     let minstring =min;
     let secstring = sec;
     let countstring = count;

     if(hr<10){
        hrstring="0"+hrstring;
     }
     if (min<10){
        minstring="0"+minstring
     }
     if(sec<10){
        secstring="0"+secstring
     }
     if(count<10){
        countstring="0"+countstring;
     }
     document.getElementById("hr").innerHTML=hrstring;
     document.getElementById("min").innerHTML = minstring;
     document.getElementById("sec").innerHTML = secstring;
     document.getElementById("count").innerHTML=countstring
     setTimeout(stopwatch,10)
    }
    
}
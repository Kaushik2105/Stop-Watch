/* for buttons*/
var startbtn = document.querySelector(".start");
var stopbtn = document.querySelector(".stop");
var resetbtn = document.querySelector(".reset");

/* for numbers*/
var miliwor = document.querySelector(".milisec");
var secwor = document.querySelector(".seco");
var miniwor = document.querySelector(".mini");
var milis="00";
var sec="00";
var min="00";
var Interval;

startbtn.addEventListener("click", function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", function() {
    clearInterval(Interval);
});

resetbtn.addEventListener("click", function() {
    clearInterval(Interval);
    milis = "00";
    sec = "00";
    min = "00"
    miliwor.innerHTML = milis;
    secwor.innerHTML =sec;
    miniwor.innerHTML = min;
});

function startTimer() {
    milis++;
    if(milis<=9) 
    {
        miliwor.innerText = "0"+milis;
    }
    if(milis>9)
    {
        miliwor.innerText = milis;
    }
    if(milis>99)
    {
        sec++;
        if(sec<=9)
        {
            secwor.innerText = "0"+sec;
        }
        if(sec>9)
        {
            secwor.innerText = sec;

        }
        if(sec>59)
        {
            min++;
            if(min<=9)
            {
                miniwor.innerText = "0"+min;
            }
            if(min>9)
            {
                miniwor.innerText = min;
            }
            sec =0
            secwor.innerText = "0" + sec;
        }
        milis=0;
        miliwor.innerText = "0" + 0;
    }
}
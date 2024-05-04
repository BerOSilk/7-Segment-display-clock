
// getting the main div container and clone it.
var container = document.querySelector("div.cont1");
var container1 = container.cloneNode(true); container1.className = "cont2";
var container2 = container.cloneNode(true); container2.className = "cont3";
var container3 = container.cloneNode(true); container3.className = "cont4";
var container4 = container.cloneNode(true); container4.className = "cont5";
var container5 = container.cloneNode(true); container5.className = "cont6";

var $ = document.createElement("div");
$.textContent = ":";

$.style.width = "150px";
$.style.marginTop = "-170px";
$.style.marginLeft = "-60px";
$.style.color = "#500";
$.style.fontSize = "500px";

var $1 = $.cloneNode(true);

// appending the clones into the body.
document.body.appendChild(container1);
document.body.appendChild($);
document.body.appendChild(container2);
document.body.appendChild(container3);
document.body.appendChild($1);
document.body.appendChild(container4);
document.body.appendChild(container5);


// getting the segments.
var segments1 = document.querySelectorAll("div.cont1 div.seg");
var segments2 = document.querySelectorAll("div.cont2 div.seg");
var segments3 = document.querySelectorAll("div.cont3 div.seg");
var segments4 = document.querySelectorAll("div.cont4 div.seg");
var segments5 = document.querySelectorAll("div.cont5 div.seg");
var segments6 = document.querySelectorAll("div.cont6 div.seg");


// a wait function to delay the proccess for x amount of time, where x is in millieseconds.
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// a function to get the current time.
function time(){
    const date = new Date();
    return {"h":date.getHours(),"m":date.getMinutes(),"s":date.getSeconds()};
}


function colors(x){
    switch (x){
        case 0:
            return ["red","red","red","red","red","red","#500"];
        case 1:
            return ["#500","#500","red","red","#500","#500","#500"];
        case 2:
            return ["#500","red","#500","red","red","red","red"];
        case 3:
            return ["#500","#500","red","red","red","red","red"];
        case 4:
            return ["red","#500","red","red","#500","#500","red"];
        case 5:
            return ["red","#500","red","#500","red","red","red"];
        case 6:
            return ["red","red","red","#500","red","red","red"];
        case 7:
            return ["#500","#500","red","red","red","#500","#500"];
        case 8:
            return ["red","red","red","red","red","red","red"];
        case 9:
            return ["red","#500","red","red","red","red","red"];
        default:
            return ["#500","#500","#500","#500","#500","#500","#500"];
    }
}

function apply(time,fSegments,sSegments){
    
    var f = 0;
    if(time < 10){
        var x = colors(-1);
        for(let i = 0;i < 7;i++){
            fSegments[i].style.backgroundColor = x[i];
        }
        if(time == 0){
            for(let i = 0;i < 7;i++){
                sSegments[i].style.backgroundColor = x[i];
            }
        }
    }
    
    while(time){
        var x = colors(time%10);
        time /= 10;
        time = parseInt(time);
        if(f == 0){
            for(let i = 0;i < 7;i++){
                sSegments[i].style.backgroundColor = x[i];
            }
        }else{
            for(let i = 0;i < 7;i++){
                fSegments[i].style.backgroundColor = x[i];
            }
        }
        f ^= 1;
    }


}

function loop(){
    
    window.requestAnimationFrame(loop);

    var times = time();
    
    apply(times["h"],segments1,segments2);
    apply(times["m"],segments3,segments4);
    apply(times["s"],segments5,segments6);

}

loop();
